import { ref } from "vue";
import { useApiGet } from "./useApi";

const PRICE_URL = "/api/presale/alphapo/available-currencies";

const SYMBOLS_MAP: {
  [key: string]: string;
} = {
  BNB: "BNB-BSC",
  ETH: "ETH",
  USDT: "USDTE",
};

const HPLT_USDT_RATE = 0.075;

type Currency = {
  currency: string;
  minimum_amount: string;
  precision: number;
  rate_from: number;
  rate_to: number;
};

export const usePrice = () => {
  const price = ref<Record<string, number>>({
    BNB: 0.00004,
    ETH: 0.001,
    USDT: 0.075,
    HPLT: 1,
  });

  const fetchPrice = async () => {
    const response = await useApiGet(PRICE_URL);
    const data = (await response.json()) as Currency[];

    if (!data) {
      return;
    }

    let newPrice: Record<string, number> = {};

    for (const symbol of Object.keys(SYMBOLS_MAP)) {
      const currency = data.find(
        (item) => item.currency === SYMBOLS_MAP[symbol]
      );

      if (currency) {
        const rate = Number(currency.rate_from) / Number(currency.rate_to);
        newPrice[symbol] = rate * HPLT_USDT_RATE;
      }
    }

    price.value = {
      ...newPrice,
      HPLT: 1,
    };
  };

  fetchPrice();

  return { price };
};
