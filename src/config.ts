import { bsc } from "viem/chains";
import { Token } from "./types/token";
import { isStageEnv } from "./helpers";

const PRESALE_CONTRACT = {
  stage: "0x9af9f4f9b737d108f7177914e9561c839e650dea",
  prod: "0x4eb26a631b1954b8a07f6ec28ab1f0b1fff0a80b",
};

const envConfig = {
  stage: {
    clientId: 4,
    clientSecret: "Q4dTyCxlsmwWBv1aaqdtI6ycjtREUbwoH1vfnJPB",
  },
  prod: {
    clientId: 5,
    clientSecret: "ez4LXep2XOyAWAqa0kdglptwZnSr9TCVTJN3Atlm",
  },
};

const isStage = isStageEnv();

const config = {
  chains: [bsc],

  chainDetails: {
    [bsc.id]: {
      name: "BSC",
      img: "/images/chains/binance.svg",
    },
  },

  presaleStartTime: isStage ? new Date().getTime() / 1000 : 1706799600,

  presaleContract: {
    [bsc.id]: isStage ? PRESALE_CONTRACT.stage : PRESALE_CONTRACT.prod,
  } as { [key: number]: `0x${string}` }, // presale contract address

  saleToken: {
    [bsc.id]: {
      symbol: "HPLT", // token symbol
      name: "HPLT", // token name
      image: "/images/tokens/hplt.svg", // token image
      decimals: 18, // token decimals
    },
  } as { [key: number]: Token },

  displayPrice: {
    [bsc.id]: "USDT",
  } as { [key: number]: string },

  whitelistedTokens: {
    [bsc.id]: [
      {
        address: null,
        symbol: "BNB",
        name: "Binance Coin",
        image: "/images/tokens/bnb.webp",
        decimals: 18,
      },
      {
        address: "0xecef257f3dc220c1c45dacc4d832175d30e4e377",
        symbol: "ETH",
        name: "Ethereum",
        image: "/images/tokens/eth.svg",
        decimals: 18,
      },
      {
        address: "0x55d398326f99059fF775485246999027B3197955",
        symbol: "USDT",
        name: "Tether USD",
        image: "/images/tokens/usdt.svg",
        decimals: 18,
      },
    ],
  } as { [key: number]: Token[] },
};

export default {
  ...config,
  ...envConfig[isStage ? "stage" : "prod"],
};
