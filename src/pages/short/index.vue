<script setup lang="ts">
import { useGetCookie } from "../../composables/useCookie"

import HeaderBlock from "../../components/HeaderBlock.vue"
import FooterBlock from "../../components/FooterBlock.vue"
import HeroBlock from "../../components/HeroBlock.vue"

const trackingLink = useGetCookie("tracking_link");

function goToPresale(e: MouseEvent) {
  e.preventDefault()
  const ref = trackingLink.value || "google"
  window.location.href = `https://presale.hypeloot.com/ref/${ref}`
}
</script>

<template>
  <div class="relative flex flex-col gap-5 p-3 md:p-7 max-w-[1300px] mx-auto pb-10 overflow-hidden" @click="goToPresale">
    <img src="../../assets/img/bg.svg" class="hidden md:block absolute left-0 -top-[600px] w-full z-0 pointer-events-none" />
    <HeaderBlock />
    <div class="relative flex flex-col gap-14 md:gap-28 z-10">
      <HeroBlock />
    </div>
    <button class="flex items-center justify-center w-full h-[60px] font-semibold uppercase text-black rounded-md bg-[#FFDA18]">
      Learn more
    </button>
    <div class="flex md:hidden">
      <FooterBlock />
    </div>
  </div>
</template>
