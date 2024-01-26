import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "../types/user";

const useStore = defineStore("store", () => {
  const isLoading = ref(false);
  const totalTokensSold = ref(0);
  const totalTokensForSale = ref(0);
  const totalBuyers = ref(0);
  const saleStatus = ref(false);
  const price = ref<Record<string, number>>({});
  const balance = ref<Record<string, number>>({});
  const mode = ref<"metamask" | "alphapo">("metamask");
  const user = ref<User | null>(null);

  return {
    price,
    balance,
    isLoading,
    saleStatus,
    totalBuyers,
    totalTokensSold,
    totalTokensForSale,
    mode,
    user,
  };
});

export default useStore;
