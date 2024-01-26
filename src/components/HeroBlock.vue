<script setup lang="ts">
import { useIsPresale } from "../composables/useIsPresale"

import SubscribeForm from "../components/SubscribeForm.vue"
import PresaleForm from "../components/PresaleForm.vue"
import RewindChart from "../components/RewindChart.vue"
import StatsBlock from "../components/StatsBlock.vue"
import FooterBlock from "../components/FooterBlock.vue"

const { isPresale } = useIsPresale()
</script>

<template>
  <div class="flex flex-col gap-5 md:gap-8">
    <div class="flex flex-col gap-2.5 md:flex-row md:items-center">
      <h1 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left md:w-1/2">
        Crypto Casino &&nbsp;Custom Games
      </h1>
      <p class="text-center text-sm md:text-left md:text-xl md:w-1/2 font-light">
        <span class="text-white/60">
          Hypeloot offers all popular Casino game modes and also adds an innovative touch by developing brand new game modes,
        </span>
        <span class="font-semibold">
          Hypeloot is also one of the only Crypto casinos having a Fiat Payment Gateway.
        </span>
      </p>
    </div>
    <div class="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
      <div class="flex flex-col gap-5 md:w-1/3">
        <SubscribeForm />
      </div>
      <div class="flex md:w-2/3">
        <StatsBlock />
      </div>
    </div>
    <div class="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
      <div class="flex flex-col gap-5 md:w-1/3">
        <PresaleForm id="presale-form" />
        <div v-if="!isPresale" class="hidden md:flex mt-16">
          <FooterBlock />
        </div>
      </div>
      <div class="flex md:w-2/3">
        <div class="flex flex-col items-center gap-4 md:gap-10 w-full p-4 md:p-7 bg-[#080531] rounded-2xl">
          <h3 class="mt-2 md:mt-2.5 text-xs md:text-2xl font-semibold tracking-widest uppercase">
            2023 hypeloot.com numbers
          </h3>
          <div class="flex w-full">
            <RewindChart />
          </div>
          <div class="flex items-center gap-3 md:gap-7">
            <div class="flex items-center gap-1 md:gap-3">
              <div class="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#FF00FB]"></div>
              <div class="text-[10px] md:text-sm font-medium">Users</div>
            </div>
            <div class="flex items-center gap-1 md:gap-3">
              <div class="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#FFC700]"></div>
              <div class="text-[10px] md:text-sm font-medium">Revenue</div>
            </div>
            <div class="flex items-center gap-1 md:gap-3">
              <div class="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#8554FB]"></div>
              <div class="text-[10px] md:text-sm font-medium">Boxes opened</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex md:w-2/3 pointer-events-none">
        <img src="../../assets/img/graphic-mobile.svg" class="w-full md:hidden" />
        <img src="../../assets/img/graphic-desktop.svg" class="w-full hidden md:block" />
      </div> -->
    </div>
  </div>
</template>