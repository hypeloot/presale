<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { disconnect } from "@wagmi/core";
import { useWeb3Modal } from "@web3modal/wagmi/vue";
import { usePrice } from "../composables/usePrice";
import { useAccount } from "../composables/useAccount";
import { useNetwork } from "../composables/useNetwork";
import { useIsPresale } from "../composables/useIsPresale"
import { useAuthModal } from "../composables/useAuthModal";
import { useLogout } from "../composables/useAuth";
import useCurrentChain from "../composables/useCurrentChain";
import useWeb3Functions from "../composables/useWeb3Functions";
import useStore from "../store";
import config from "../config";

const { isPresale } = useIsPresale()
const { isConnected } = useAccount();
const { open: openAuthModal } = useAuthModal();
const { switchToDefaultNetwork } = useWeb3Functions();
const { open } = useWeb3Modal();
const { price } = usePrice();
const network = useNetwork();
const chain = useCurrentChain();
const opened = ref<boolean>(false);
const store = useStore();
const isUser = computed(() => store.user !== null);

const {
  // price,
  // totalTokensForSale,
  // totalTokensSold,
  // isLoading,
  // balance,
  // totalBuyers,
  // saleStatus,
  mode,
} = storeToRefs(store);

// const untilPresaleStart = computed(() => {
//   const now = new Date().getTime();
//   const startTime = new Date(config.presaleStartTime * 1000).getTime();
//   return startTime - now;
// });

// const isStarted = computed(
//   () => untilPresaleStart.value <= 0 && saleStatus.value
// );

const tokenPrice = computed(
  () => 0.15 || price.value[config.displayPrice[chain.value.id]] || 0
);

// const soldPercentage = computed(() =>
//   totalTokensForSale.value
//     ? (totalTokensSold.value / totalTokensForSale.value) * 100
//     : 0
// );

const buttonLabel = computed(() => {
  if (!isPresale) return "Join us";
  if (isUser.value) return "Wallet";
  if (mode.value === "alphapo") return "Sign up";
  if (!isConnected.value) return "Connect Wallet";
  if (network.chain?.value?.unsupported) return "Switch Network";
  return "Wallet";
});

function walletClick() {
  if (!isPresale) return;

  if (isUser.value) {
    opened.value = !opened.value;
    return;
  }

  if (mode.value === "alphapo") return openAuthModal();
  if (!isConnected.value) return open();
  if (network.chain?.value?.unsupported) return switchToDefaultNetwork();
  opened.value = !opened.value;
}

function logoutClick() {
  useLogout();
  opened.value = false;
}

function disconnectClick() {
  disconnect();
  opened.value = false;
}
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center bg-primary px-3 md:px-5 py-1 md:py-2 gap-2 md:gap-2.5 rounded-md"
      :class="{ '!bg-[#332A6A]': isConnected }"
      @click="walletClick"
    >
      <span class="text-sm font-medium">
        {{ buttonLabel }}
      </span>

      <span v-if="isConnected" class="flex" :class="{ 'rotate-180': opened }">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1.92322 4.63162C1.59656 4.95828 1.59656 5.48495 1.92322 5.81161L7.52989 11.4183C7.78989 11.6783 8.20989 11.6783 8.46989 11.4183L14.0766 5.81161C14.4032 5.48495 14.4032 4.95828 14.0766 4.63161C13.7499 4.30495 13.2232 4.30495 12.8966 4.63161L8.00322 9.52495L3.10322 4.62495C2.77656 4.30495 2.24989 4.30495 1.92322 4.63162Z" fill="white"/>
        </svg>
      </span>
      <span v-else-if="mode === 'alphapo'" class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5.10449 5H11.1045C11.6545 5 12.1045 4.55 12.1045 4C12.1045 3.45 11.6545 3 11.1045 3H5.10449C4.00449 3 3.10449 3.9 3.10449 5V19C3.10449 20.1 4.00449 21 5.10449 21H11.1045C11.6545 21 12.1045 20.55 12.1045 20C12.1045 19.45 11.6545 19 11.1045 19H5.10449V5Z" fill="white"/>
          <path d="M20.7545 11.65L17.9645 8.86C17.6445 8.54 17.1045 8.76 17.1045 9.21V11H10.1045C9.55449 11 9.10449 11.45 9.10449 12C9.10449 12.55 9.55449 13 10.1045 13H17.1045V14.79C17.1045 15.24 17.6445 15.46 17.9545 15.14L20.7445 12.35C20.9445 12.16 20.9445 11.84 20.7545 11.65Z" fill="white"/>
        </svg>
      </span>
      <span v-else class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 18C13 17.45 12.55 17 12 17H3V11H21V5C21 3.9 20.1 3 19 3H3C1.89 3 1.01 3.89 1.01 5L1 17C1 18.11 1.89 19 3 19H12C12.55 19 13 18.55 13 18ZM19 7H3V5H19V7ZM19 21C18.45 21 18 20.55 18 20V18H16C15.45 18 15 17.55 15 17C15 16.45 15.45 16 16 16H18V14C18 13.45 18.45 13 19 13C19.55 13 20 13.45 20 14V16H22C22.55 16 23 16.45 23 17C23 17.55 22.55 18 22 18H20V20C20 20.55 19.55 21 19 21Z" fill="white"/>
        </svg>
      </span>
    </button>
    <div v-if="opened" class="absolute right-0 top-12 p-5 bg-[#332A6A] rounded-md w-[280px] md:w-[420px]">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col items-center gap-2.5">
          <span class="text-white/50 text-sm font-semibold uppercase">
            Launch Price
          </span>
          <span class="font-semibold uppercase leading-none">
            1 $HPLT = ${{ tokenPrice }}
          </span>
        </div>
        <hr class="border-white/10" />
        <div class="flex flex-col items-center gap-5">
          <span class="text-white/50 text-sm font-semibold uppercase">
            {{ new Date().toLocaleString() }}
          </span>
          <div class="flex flex-col items-center gap-4 w-full">
            <div class="flex items-center gap-3 w-full">
              <img src="./../assets/img/big-coin.png" class="w-[30px]" />
              <span class="font-semibold">HPLT</span>
              <span class="font-semibold ml-auto">0.00</span>
            </div>
            <div class="flex items-center gap-3 w-full">
              <img src="./../assets/img/usd-coin.png" class="w-[30px]" />
              <span class="font-semibold">Staking Rewards</span>
              <span class="font-semibold ml-auto">0.00</span>
            </div>
            <div class="flex items-center gap-3 w-full">
              <img src="./../assets/img/wallet.png" class="w-[30px]" />
              <span class="font-semibold">Launch Profit on</span>
              <span class="font-semibold ml-auto text-[#93DB4A]">0 USD</span>
            </div>
            <div class="flex items-center gap-3 w-full">
              <img src="./../assets/img/coins.png" class="w-[30px]" />
              <span class="font-semibold">HPLT NFT</span>
              <span class="font-semibold ml-auto">No NFT</span>
            </div>
          </div>
        </div>
        <hr class="border-white/10" />
        <div class="flex flex-col gap-2.5">
          <div class="flex items-center gap-3 w-full">
            <img src="./../assets/img/nft/comp-1-mini.png" class="w-[30px]" />
            <span class="font-semibold text-[#FFFFFF60]">Common NFT</span>
            <span class="font-semibold text-[#FFFFFF60] ml-auto">$200+</span>
          </div>
          <div class="relative h-4 overflow-hidden rounded-xl bg-white/20">
            <div
              class="absolute inset-0 h-full bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90"
              :style="{ width: `${0}%` }"
            ></div>
            <span class="absolute inset-0 flex items-center justify-center text-white text-xs font-normal">
              {{ 0 }}%
            </span>
          </div>
          <div class="flex items-center justify-center text-white/50 text-xs font-normal">
            $1,000 USD left until Common Level
          </div>
        </div>
        <button v-if="isUser" class="px-5 py-2 rounded-md bg-white/10 text-center font-medium" @click="logoutClick">
          Logout
        </button>
        <button v-else class="px-5 py-2 rounded-md bg-white/10 text-center font-medium" @click="disconnectClick">
          Disconnect
        </button>
      </div>
    </div>
  </div>
</template>