import { defaultWagmiConfig } from "@web3modal/wagmi";
import config from "./config";

const chains = config.chains;
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

export const web3modalConfig = {
  wagmiConfig,
  projectId,
  chains,
  defaultChain: chains[0],
};
