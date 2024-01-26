<script setup lang="ts">
import WalletButton from "../components/WalletButton.vue"
import socialLinks from "../constants/social-links";
</script>

<template>
  <div class="relative flex items-center justify-between z-30">
    <div class="flex items-center gap-1.5 md:gap-2">
      <img src="../assets/img/coin.png" class="w-5 md:w-7" />
      <img src="../assets/img/logo.svg" class="md:h-5" />
    </div>
    <div class="hidden md:flex items-center gap-5">
      <a href="/#casino" class="text-sm text-white/50 hover:text-white">
        What is Hypeloot Casino?
      </a>
      <a href="/#roadmap" class="text-sm text-white/50 hover:text-white">
        Growth Potential
      </a>
      <a href="/whitepaper.pdf" target="_blank" class="text-sm text-white/50 hover:text-white">
        Whitepaper
      </a>
      <a href="/#tokenomics" class="text-sm text-white/50 hover:text-white">
        Tokenomics
      </a>
      <a href="/#how-to-buy" class="text-sm text-white/50 hover:text-white">
        How to Buy
      </a>
      <a href="/#faq" class="text-sm text-white/50 hover:text-white">
        FAQ
      </a>
    </div>
    <div class="hidden md:flex items-center justify-center gap-3">
      <a v-for="item in socialLinks" :href="item.url" target="_blank" class="flex items-center justify-center">
        <img :src="item.icon" class="w-[20px] h-[20px]" />
      </a>
    </div>
    <WalletButton />
  </div>
</template>