import config from "../config";

import {
  Address,
  createPublicClient,
  formatUnits,
  getContract,
  http,
  parseUnits,
  zeroAddress,
} from "viem";
import useCurrentChain from "./useCurrentChain";
import { computed } from "vue";
import { presaleAbi } from "../contractsAbi/presaleABI";
import useStore from "../store";
import { Token } from "../types/token";
import { useToast } from "vue-toast-notification";
import { erc20ABI, getWalletClient, switchNetwork } from "@wagmi/core";
import { useAccount } from "./useAccount";

const MAX_UINT256 = 2n ** 256n - 1n;

const publicClients = config.chains.reduce((acc, chain) => {
  acc[chain.id] = createPublicClient({
    chain,
    batch: { multicall: true },
    transport: http(),
  });
  return acc;
}, {} as { [key: number]: ReturnType<typeof createPublicClient> });

const useWeb3Functions = () => {
  const toast = useToast({
    position: "bottom",
  });
  const store = useStore();
  const chain = useCurrentChain();
  const tokens = computed(() => config.whitelistedTokens[chain.value.id]);
  const saleToken = computed(() => config.saleToken[chain.value.id]);
  const { address } = useAccount();

  const publicClient = computed(() => publicClients[chain.value.id]);
  const presaleContract = computed(() =>
    getContract({
      address: config.presaleContract[chain.value.id],
      abi: presaleAbi,
      publicClient: publicClient.value,
    })
  );

  const fetchIntialData = async () => {
    store.isLoading = true;

    const [saleStatus, totalBuyers] = await Promise.all([
      presaleContract.value.read.saleStatus(),
      presaleContract.value.read.totalBuyers(),
      fetchTotalTokensForSale(),
      fetchTotalTokensSold(),
      fetchTokenPrices(),
    ]);

    store.saleStatus = saleStatus;
    store.totalBuyers = Number(totalBuyers);
    store.isLoading = false;
  };

  const fetchTotalTokensForSale = async () => {
    // const totalTokensForSale = await Promise.all(
    //   config.chains
    //     .filter((chain) => config.presaleContract[chain.id])
    //     .map((chain) =>
    //       publicClients[chain.id]
    //         .readContract({
    //           address: config.presaleContract[chain.id],
    //           abi: presaleAbi,
    //           functionName: "totalTokensforSale",
    //         })
    //         .catch(() => 0n)
    //     )
    // );
    // store.totalTokensForSale =
    //   +format(totalTokensForSale.reduce((a, b) => a + b, 0n)) || 0;
    store.totalTokensForSale = 6666666.66;
  };

  const fetchTotalTokensSold = async () => {
    const totalTokensSold = await Promise.all(
      config.chains
        .filter((chain) => config.presaleContract[chain.id])
        .map((chain) =>
          publicClients[chain.id]
            .readContract({
              address: config.presaleContract[chain.id],
              abi: presaleAbi,
              functionName: "totalTokensSold",
            })
            .catch(() => 0n)
        )
    );

    store.totalTokensSold =
      +format(totalTokensSold.reduce((a, b) => a + b, 0n)) || 0;
  };

  const fetchLockedBalance = async () => {
    if (!address.value) return;

    const { symbol, decimals } = config.saleToken[chain.value.id];
    const buyerAmount = await presaleContract.value.read.buyersDetails([
      address.value,
    ]);
    const balance = +formatUnits(buyerAmount[0], decimals);

    store.balance = { ...store.balance, [symbol]: balance };
  };

  const fetchTokenBalances = async () => {
    if (!address.value) return;

    const balancses = await Promise.all(
      tokens.value.map((token) =>
        token.address
          ? publicClient.value.readContract({
              address: token.address,
              abi: erc20ABI,
              functionName: "balanceOf",
              args: [address.value as Address],
            })
          : publicClient.value.getBalance({
              address: address.value as Address,
            })
      )
    );

    tokens.value.forEach((token, index) => {
      store.balance = {
        ...store.balance,
        [token.symbol]: +formatUnits(balancses[index], token.decimals),
      };
    });
  };

  const fetchTokenPrices = async () => {
    const pricses = await Promise.all(
      tokens.value.map((token) =>
        token.address
          ? presaleContract.value.read.tokenPrices([token.address])
          : presaleContract.value.read.rate()
      )
    );

    tokens.value.forEach((token, index) => {
      store.price = {
        ...store.price,
        [token.symbol]: +formatUnits(pricses[index], token.decimals),
      };
    });
  };

  const checkAllowance = async (
    token: Token,
    owner: Address,
    spender: Address,
    amount: bigint
  ) => {
    const walletClient = await getWalletClient({ chainId: chain.value.id });
    if (!token.address || !walletClient || !address.value) return;

    const tokenContract = getContract({
      address: token.address,
      abi: erc20ABI,
      walletClient: walletClient,
      publicClient: publicClient.value,
    });
    const allowance = await tokenContract.read.allowance([owner, spender]);

    if (allowance < amount) {
      const hash = await tokenContract.write.approve([spender, MAX_UINT256]);
      await publicClient.value.waitForTransactionReceipt({ hash });
      toast.success("Spend approved");
    }
  };

  const buyToken = async (value: string | number, token: Token) => {
    let success = false;
    let hash;
    const walletClient = await getWalletClient({ chainId: chain.value.id });

    if (!walletClient || !address.value) return { success, txHash: hash };

    store.isLoading = true;

    try {
      const amount = parseUnits(`${value}`, token.decimals);

      if (token.address) {
        await checkAllowance(
          token,
          address.value,
          presaleContract.value.address,
          amount
        );
      }

      const { request } = await presaleContract.value.simulate.buyToken(
        [token.address || zeroAddress, amount],
        { account: address.value, value: token.address ? 0n : amount }
      );

      hash = await walletClient.writeContract(request);
      await publicClient.value.waitForTransactionReceipt({ hash });

      fetchTokenBalances();
      fetchLockedBalance();
      fetchTotalTokensSold();

      toast.success(
        `You have successfully purchased $${saleToken.value.symbol} Tokens. Thank you!`
      );

      success = true;
    } catch (error: any) {
      toast.error(
        error?.walk?.().shortMessage ||
          error?.walk?.().message ||
          error?.message ||
          "Signing failed, please try again!"
      );
    }

    store.isLoading = false;

    return { success, txHash: hash };
  };

  const switchToDefaultNetwork = async () => {
    store.isLoading = true;
    await switchNetwork?.({ chainId: config.chains[0].id }).catch(() =>
      toast.error("Failed to switch network")
    );
    store.isLoading = false;
  };

  const parse = (value: string | number) =>
    parseUnits(`${value}`, saleToken.value.decimals);

  const format = (value: bigint) =>
    formatUnits(value, saleToken.value.decimals);

  return {
    parse,
    format,
    buyToken,
    fetchIntialData,
    fetchLockedBalance,
    fetchTokenBalances,
    switchToDefaultNetwork,
  };
};

export default useWeb3Functions;
