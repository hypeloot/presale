<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import config from "../config";
import { useWeb3Modal } from "@web3modal/wagmi/vue";
import useCurrentChain from "../composables/useCurrentChain";
import useStore from "../store";
import { storeToRefs } from "pinia";
import useWeb3Functions from "../composables/useWeb3Functions";
import { useIsPresale } from "../composables/useIsPresale";
import { useNetwork } from "../composables/useNetwork";
import { useAccount } from "../composables/useAccount";
import { usePrice } from "../composables/usePrice";
import LoaderIcon from "./icons/LoaderIcon.vue";
import Countdown from "@chenfengyuan/vue-countdown";
import PresaleDeposit from "./PresaleDeposit.vue";
import { transformZeroPads } from "../utils";

type Bonus = {
  name: string;
  label: string;
  color: string;
  minAmount: number;
};

const MIN_FROM_VALUE: {
  [key: string]: number;
} = {
  BNB: 0.05,
  ETH: 0.01,
  USDT: 10,
  HPLT: 1,
};

const MAX_FROM_VALUE = 50000;

const NTF_BONUSES: Bonus[] = [
  {
    name: "legendary",
    label: "Legendary",
    color: "#DBB94B",
    minAmount: 10000,
  },
  {
    name: "epic",
    label: "Epic",
    color: "#AC52E8",
    minAmount: 5000,
  },
  {
    name: "rare",
    label: "Rare",
    color: "#FD57F7",
    minAmount: 1000,
  },
  {
    name: "uncommon",
    label: "Uncommon",
    color: "#30FFFF",
    minAmount: 500,
  },
  {
    name: "common",
    label: "Common",
    color: "#FFFFFF60",
    minAmount: 200,
  },
];

const { isPresale } = useIsPresale();
const { address, isConnected } = useAccount();
const { open } = useWeb3Modal();
const { price } = usePrice();
const network = useNetwork();
const chain = useCurrentChain();
const store = useStore();

const {
  // price,
  totalTokensForSale,
  totalTokensSold,
  isLoading,
  balance,
  totalBuyers,
  saleStatus,
  mode,
} = storeToRefs(store);

const {
  buyToken,
  fetchLockedBalance,
  fetchTokenBalances,
  fetchIntialData,
  switchToDefaultNetwork,
} = useWeb3Functions();

const tokens = computed(() => config.whitelistedTokens[chain.value.id]);
const saleToken = computed(() => config.saleToken[chain.value.id]);

const fromValue = ref<string>("");
const toValue = ref<string>("");
const fromToken = ref(tokens.value[0]);

const untilPresaleStart = computed(() => {
  const now = new Date().getTime();
  const startTime = new Date(config.presaleStartTime * 1000).getTime();
  return startTime - now;
});

const isStarted = computed(
  () => untilPresaleStart.value <= 0 && saleStatus.value
);

function roundCrypto(num: number) {
  return Math.round((num) * 10000) / 10000;
}

const tokenPrice = computed(
  () => 0.075 || roundCrypto(price.value[config.displayPrice[chain.value.id]]) || 0
);

const soldPercentage = computed(() =>
  totalTokensForSale.value
    ? (totalTokensSold.value / totalTokensForSale.value) * 100
    : 0
);

// const formatNumber = (num: number | string | undefined) => {
//   if (!num) return "0";
//   return Number(num).toLocaleString(undefined, {
//     maximumSignificantDigits: 6,
//     notation: "compact",
//   });
// };

// const lockedToken = computed(() =>
//   formatNumber(balance.value[saleToken.value.symbol])
// );

const insufficientBalance = computed(() => {
  if (!fromValue.value) return false;
  return +fromValue.value > balance.value[fromToken.value.symbol];
});

const isMinValue = computed(() => {
  if (!fromValue.value) return false;
  return +fromValue.value < MIN_FROM_VALUE[fromToken.value.symbol];
});

const isMaxValue = computed(() => {
  if (!fromValue.value) return false;
  return +fromValue.value >= MAX_FROM_VALUE;
});

const buttonLabel = computed(() => {
  if (!isConnected.value) return "Connect Wallet";
  if (network.chain?.value?.unsupported) return "Switch Network";
  if (!isStarted.value) return "Presale Not Started";
  if (+fromValue.value === 0) return "Enter Amount";
  if (insufficientBalance.value) return "Insufficient Balance";
  return `Buy ${saleToken.value.symbol} now`;
});

const bonus = computed(() => {
  const amount = +fromValue.value;
  const bonus = NTF_BONUSES.find((bonus) => amount >= bonus.minAmount);
  return bonus;
});

const emptyValues = () => {
  fromValue.value = "";
  toValue.value = "";
};

const submit = async () => {
  if (!isConnected.value) return open();

  if (network.chain?.value?.unsupported) return switchToDefaultNetwork();

  if (+fromValue.value === 0) return;

  await buyToken(fromValue.value, fromToken.value);
  emptyValues();
};

watch(fromToken, () => {
  emptyValues();
});

watch([address, chain], () => {
  if (!address || !chain) return;
  fetchLockedBalance();
  fetchTokenBalances();
});

watch(
  () => network.chain?.value,
  () => {
    if (!network.chain || network.chain.value?.unsupported) return;
    fromToken.value = tokens.value[0];
    fetchIntialData();
    emptyValues();
  }
);

// console.log("mode", mode.value);

onMounted(() => {
  fetchIntialData();
});
</script>

<template>
  <div class="bg-[#080531] rounded-2xl">
    <div v-if="false" class="flex flex-col items-center justify-center py-10 gap-3">
      <LoaderIcon class="w-12 h-12 animate-spin" />
      <p class="text-lg">Loading...</p>
    </div>
    <div v-else class="p-5 md:p-8 space-y-5">
      <div v-if="!isStarted" class="space-y-5">
        <p class="mb-4 text-sm text-center text-white/50">
          Presale starts in
        </p>
        <Countdown
          :time="untilPresaleStart"
          :transform="transformZeroPads"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <p class="mb-4 text-2xl font-semibold text-center">{{ days }} days</p>
          <div
            class="flex gap-2 items-center justify-center font-bold uppercase text-center text-[54px]/[48px] md:text-[66px]/[66px] bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text -translate-x-[2%]"
          >
            <span class="w-16 md:w-20">{{ hours }} </span> <span>:</span>
            <span class="w-16 md:w-20">{{ minutes }}</span> <span>:</span>
            <span class="w-16 md:w-20">{{ seconds }}</span>
          </div>
        </Countdown>
        <template v-if="isPresale">
          <p class="text-sm text-center text-white/50">Listing Price = $0.15</p>
          <hr class="border-white/10" />
        </template>
      </div>
      <div v-else class="space-y-5">
        <p
          class="font-bold uppercase text-center italic text-[48px]/[55px] w-full truncate bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text"
        >
          ${{ (totalTokensSold * tokenPrice).toLocaleString() }}
        </p>

        <div class="space-y-1">
          <p class="text-sm text-white/50">
            {{ +soldPercentage.toFixed(2) }}% of minimum goal raised
          </p>
          <div class="relative h-3 overflow-hidden rounded-xl bg-white/20">
            <div
              class="absolute inset-0 h-full bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90"
              :style="{ width: `${soldPercentage}%` }"
            ></div>
          </div>
          <p class="text-sm text-right text-white/50">
            ${{ (totalTokensForSale * tokenPrice).toLocaleString() }}
          </p>
        </div>

        <p class="text-2xl font-semibold text-center">
          {{ totalBuyers }} Participants
        </p>

        <p class="text-sm text-center text-white/50">Listing Price = $0.05</p>
        <hr class="border-white/10" />
      </div>

      <template v-if="isPresale">
        <p class="text-sm text-center text-white/50">
          1 $HPLT = ${{ tokenPrice }}
        </p>

        <template v-if="mode === 'metamask'">
          <div class="flex items-center gap-4">
            <div class="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
              <button
                v-for="(token, key) in tokens"
                :key="key"
                class="p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75"
                :class="[
                  fromToken.symbol === token.symbol ? 'bg-primary' : 'bg-white/10',
                ]"
                @click="fromToken = token"
              >
                <img
                  :src="token.image"
                  :alt="token.symbol"
                  class="object-contain w-4 h-4"
                />
                {{ token.symbol }}
              </button>
            </div>
            <button class="flex flex-shrink-0 rounded-md bg-white/10" @click="mode = 'alphapo'">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8L13 5.11325V10.8868L18 8ZM6 8.5H13.5V7.5H6V8.5Z" fill="white" fill-opacity="0.5"/>
                <path d="M6 16L11 18.8868L11 13.1132L6 16ZM18 15.5L10.5 15.5L10.5 16.5L18 16.5L18 15.5Z" fill="white" fill-opacity="0.5"/>
              </svg>
            </button>
          </div>
          
          <div class="space-y-2">
            <label
              for="from-token"
              class="text-xs font-semibold uppercase text-white/50"
            >
              Amount in
              <span class="text-primary">{{ fromToken.symbol }}</span> you pay
            </label>
            <div class="relative">
              <input
                type="number"
                class="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                :class="{
                  'border-red-500 focus-visible:ring-red-500 text-red-500':
                    insufficientBalance || isMaxValue || isMinValue,
                }"
                v-model="fromValue"
                @input="
                  toValue = fromValue
                    ? roundCrypto((Number(fromValue) / price[fromToken.symbol])).toString()
                    : ''
                "
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-5">
                <img
                  :src="fromToken.image"
                  :alt="fromToken.symbol"
                  class="object-contain w-6 h-6"
                />
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <label
              for="from-token"
              class="text-xs font-semibold uppercase text-white/50"
            >
              Amount in ${{ saleToken.symbol }} you receive
              <template v-if="bonus">
                + <span :style="{ color: bonus.color }">{{ bonus.label }} NFT</span>
              </template>
              <!-- <span class="block normal-case font-medium text-[10px]/[14px]">
                ($10.000+ = Legendary NFT, $5000+ = Epic NFT, $1000+ = Rare NFT, (make sure to use the according colors but have Uncommon NFT as default, once the amount changes, the NFT rarity should also change)
              </span> -->
            </label>
            <div class="relative">
              <input
                type="number"
                class="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                v-model="toValue"
                @input="
                  fromValue = toValue
                    ? roundCrypto((Number(toValue) * price[fromToken.symbol])).toString()
                    : ''
                "
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-5">
                <img
                  :src="saleToken.image"
                  :alt="saleToken.symbol"
                  class="object-contain w-6 h-6"
                />
              </div>
            </div>
          </div>
          <button
            class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="
              isLoading ||
              insufficientBalance ||
              isMaxValue ||
              (isConnected && !network.chain?.value?.unsupported && !isStarted)
            "
            @click="submit"
          >
            <LoaderIcon v-if="isLoading" class="w-6 h-6 mr-2 animate-spin" />
            {{ buttonLabel }}
          </button>
        </template>
        <template v-else>
          <PresaleDeposit />
        </template>
      </template>
      <template v-else>
        <button type="button" class="flex items-center justify-center w-full p-4 md:p-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 text-lg md:text-2xl">
          visit presale page
        </button>
      </template>
    </div>
  </div>
</template>
