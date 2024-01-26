<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { Token } from "../types/token";
import { useAuthModal } from "../composables/useAuthModal";
import useStore from "../store";

const tokens: Token[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    image: "/images/tokens/btc.svg",
    decimals: 18,
  },
  {
    symbol: "LTC",
    name: "Litecoin",
    image: "/images/tokens/ltc.png",
    decimals: 18,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    image: "/images/tokens/doge.png",
    decimals: 18,
  },
]

const store = useStore();
const { mode } = storeToRefs(store);
const { open: openAuthModal } = useAuthModal();
const isUser = computed(() => store.user !== null);

const current = ref<Token>(tokens[0])
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center gap-4">
      <div class="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
        <button
          v-for="(token, key) in tokens"
          :key="key"
          class="p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75"
          :class="[
            current.symbol === token.symbol ? 'bg-primary' : 'bg-white/10',
          ]"
          @click="current = token"
        >
          <img
            :src="token.image"
            :alt="token.symbol"
            class="object-contain w-4 h-4"
          />
          {{ token.symbol }}
        </button>
      </div>
      <button class="flex flex-shrink-0 rounded-md bg-white/10" @click="mode = 'metamask'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 8L13 5.11325V10.8868L18 8ZM6 8.5H13.5V7.5H6V8.5Z" fill="white" fill-opacity="0.5"/>
          <path d="M6 16L11 18.8868L11 13.1132L6 16ZM18 15.5L10.5 15.5L10.5 16.5L18 16.5L18 15.5Z" fill="white" fill-opacity="0.5"/>
        </svg>
      </button>
    </div>

    <div class="flex items-end gap-5">
      <div class="flex flex-shrink-0 w-[100px] h-[100px] rounded-[20px] border border-white/20">
        
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="text-xs text-white/50 font-semibold uppercase">
          Copy address
        </div>
        <div class="flex items-center gap-2.5 p-5 rounded-lg border border-white/20">
          <span class="w-full truncate">
            <!-- 0xb3677e9403...35e -->
          </span>
          <button class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.0003 0.666016H3.00033C2.26699 0.666016 1.66699 1.26602 1.66699 1.99935V11.3327H3.00033V1.99935H11.0003V0.666016ZM13.0003 3.33268H5.66699C4.93366 3.33268 4.33366 3.93268 4.33366 4.66602V13.9993C4.33366 14.7327 4.93366 15.3327 5.66699 15.3327H13.0003C13.7337 15.3327 14.3337 14.7327 14.3337 13.9993V4.66602C14.3337 3.93268 13.7337 3.33268 13.0003 3.33268ZM13.0003 13.9993H5.66699V4.66602H13.0003V13.9993Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex flex-shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="white" fill-opacity="0.2"/>
          <path d="M13.0944 7.276L12.8544 13.024H11.1144L10.8744 7.276H13.0944ZM12.0144 16.096C11.6544 16.096 11.3584 15.992 11.1264 15.784C10.9024 15.568 10.7904 15.304 10.7904 14.992C10.7904 14.672 10.9024 14.404 11.1264 14.188C11.3584 13.972 11.6544 13.864 12.0144 13.864C12.3664 13.864 12.6544 13.972 12.8784 14.188C13.1104 14.404 13.2264 14.672 13.2264 14.992C13.2264 15.304 13.1104 15.568 12.8784 15.784C12.6544 15.992 12.3664 16.096 12.0144 16.096Z" fill="white" fill-opacity="0.5"/>
        </svg>
      </div>
      <div class="text-xs text-white/50 leading-normal">
        This is your private depositing address. Any deposit you make will show up in your balance after blockchain confirmation
      </div>
    </div>

    <button v-if="!isUser" class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed" @click="openAuthModal">
      Sign up
    </button>
  </div>
</template>
