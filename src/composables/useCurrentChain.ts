import { computed } from "vue";
import config from "../config";
import { useNetwork } from "./useNetwork";
import { Chain } from "viem";

const useCurrentChain = () => {
  const { chain } = useNetwork();
  return computed<Chain & { unsupported?: boolean }>(() =>
    !chain?.value || chain.value.unsupported ? config.chains[0] : chain.value
  );
};

export default useCurrentChain;
