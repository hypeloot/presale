<script setup lang="ts">
import socialLinks from "../constants/social-links";
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <div class="px-4 py-2.5 text-white/50 text-sm font-medium bg-[#363079] rounded-xl text-center">
      For all inquiries, <a class="text-[#FFBD21]" href="mailto:contact@hypeloot.com">contact@hypeloot.com</a>
    </div>
    <div class="flex items-center justify-center gap-4">
      <a v-for="item in socialLinks" :href="item.url" target="_blank" class="flex items-center justify-center">
        <img :src="item.icon" class="w-[30px] h-[30px]" />
      </a>
    </div>
    <div class="flex flex-wrap gap-5 justify-center items-center">
      <a href="https://hypeloot.com/contacts" target="_blank" class="text-white/50 text-xs font-medium">
        Contact
      </a>
      <a href="https://hypeloot.com/faq" target="_blank" class="text-white/50 text-xs font-medium">
        FAQ
      </a>
      <a href="https://hypeloot.com/provably-fair" target="_blank" class="text-white/50 text-xs font-medium">
        Provably fair
      </a>
      <a href="https://hypeloot.com/terms-of-service" target="_blank" class="text-white/50 text-xs font-medium">
        Terms of service
      </a>
    </div>
    <div class="text-center text-white/50 text-[10px] font-medium">
      HypeLoot is a brand name of Abacanes LTD, Reg No: HE443277, Having it's registered address at Strovolou, 77 STROVOLOS CENTER, 4th floor, Office 401 Strovolos, Nicosia, Cyprus
    </div>
  </div>
</template>