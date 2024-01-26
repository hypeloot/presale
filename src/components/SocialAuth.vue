<script setup lang="ts">
import { useBaseUrl } from "../composables/useApi";

import GoogleIcon from "./icons/GoogleIcon.vue"
import FacebookIcon from "./icons/FacebookIcon.vue"
import SteamIcon from "./icons/SteamIcon.vue"

const { baseUrl } = useBaseUrl()

function open(provider: string) {
  window.location.href = `${baseUrl}/presale/social/${provider}/redirect`
}
</script>

<template>
  <div class="grid grid-cols-3 gap-2.5">
    <button class="disabled:opacity-30" @click="open('google')">
      <div class="flex flex-col gap-3 items-center justify-center py-5 border border-white/20 rounded-lg">
        <GoogleIcon />
        <span class="text-sm text-center font-semibold">
          Google
        </span>
      </div>
    </button>
    <button class="disabled:opacity-30" @click="open('facebook')" disabled>
      <div class="flex flex-col gap-3 items-center justify-center py-5 border border-white/20 rounded-lg">
        <FacebookIcon />
        <span class="text-sm text-center font-semibold">
          Facebook
        </span>
      </div>
    </button>
    <button class="disabled:opacity-30" @click="open('steam')" disabled>
      <div class="flex flex-col gap-3 items-center justify-center py-5 border border-white/20 rounded-lg">
        <SteamIcon />
        <span class="text-sm text-center font-semibold">
          Steam
        </span>
      </div>
    </button>
  </div>
</template>