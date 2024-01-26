<script setup lang="ts">
import { computed } from "vue";
import config from "../config";
import useCurrentChain from "../composables/useCurrentChain";

const chain = useCurrentChain();
const saleToken = computed(() => config.saleToken[chain.value.id]);
// const presaleContract = computed(() => config.presaleContract[chain.value.id]);

</script>

<template>
  <div class="flex flex-col rounded-3xl bg-[#332A6A] p-5 md:p-7 md:flex-row">
    <div class="flex flex-wrap border-b md:border-b-0 md:border-r border-white/10 md:mr-10">
      <div class="flex flex-col gap-1 w-1/2">
        <span class="text-white/50 text-sm md:text-base">
          Token Name
        </span>
        <span class="text-sm md:text-base">
          HYPELOOT
        </span>
      </div>
      <!-- <div class="flex flex-col gap-1 mb-5 w-1/2">
        <span class="text-white/50 text-sm md:text-base">
          Token Sale Stage
        </span>
        <span class="text-sm md:text-base">
          13
        </span>
      </div> -->
      <div class="flex flex-col gap-1 mb-5 w-1/2">
        <span class="text-white/50 text-sm md:text-base">
          Token Type
        </span>
        <span class="text-sm md:text-base">
          ERC20 (Ethereum)
        </span>
      </div>
      <div class="flex flex-col gap-1 mb-5 w-1/2">
        <span class="text-white/50 text-sm md:text-base">
          Token Symbol
        </span>
        <span class="text-sm md:text-base">
          {{ saleToken.symbol }}
        </span>
      </div>
      <div class="flex flex-col gap-1 mb-5 w-1/2">
        <span class="text-white/50 text-sm md:text-base">
          Decimal
        </span>
        <span class="text-sm md:text-base">
          {{ saleToken.decimals}}
        </span>
      </div>
      <div class="flex flex-col gap-1 mb-5 w-full">
        <span class="text-white/50 text-sm md:text-base">
          Token Contract Address
        </span>
        <a
          href="https://etherscan.io/token/0x11c9eba7c8a3bd9f44f0a5eb737b36cecbc610f5"
          target="_blank"
          class="text-sm md:text-base truncate"
        >
          0x11c9eba7c8a3bd9f44f0a5eb737b36cecbc610f5
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-5">
      <div class="font-bold italic uppercase">
        Pre-sale Details
      </div>
      <div class="flex flex-wrap gap-5">
        <div class="flex flex-col gap-1 w-full">
          <span class="text-white/50 text-sm md:text-base">
            Token sold during the Pre-sale
          </span>
          <span class="text-sm md:text-base">
            40,000,000
          </span>
        </div>
        <div class="flex flex-col gap-1 w-full">
          <span class="text-white/50 text-sm md:text-base">
            Current Stage Price
          </span>
          <span class="text-sm md:text-base">
            1 $HPLT = $0.075
          </span>
        </div>
        <div class="flex flex-col gap-1 w-full">
          <span class="text-white/50 text-sm md:text-base">
            Exchange Listing Price
          </span>
          <span class="text-sm md:text-base">
            1 $HPLT = $0.15
          </span>
        </div>
      </div>
    </div>
  </div>
</template>