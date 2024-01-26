<script setup lang="ts">
import gsap from 'gsap'
import { ref, computed, onUnmounted } from 'vue'

const stats = ref({
  bets: getBets(),
  users: getUsers(),
})

const interval = setInterval(() => {
  if (Math.random() < 0.5) {
    gsap.to(stats.value, {
      duration: 1,
      bets: getBets()
    })
    return
  }

  if (Math.random() < 0.5) {
    gsap.to(stats.value, {
      duration: 1,
      users: getUsers()
    })
    return
  }

  gsap.to(stats.value, {
    duration: 1,
    bets: getBets(),
    users: getUsers()
  })
}, 1000)

const bets = computed(() => {
  return Math.floor(stats.value.bets).toLocaleString().split('')
})

const users = computed(() => {
  return Math.floor(stats.value.users).toLocaleString().split('')
})

function getBets() {
  const start = 50854438;
  const now = new Date().getTime();
  return Math.floor(start + (now - 1705410978000) / 1000 * 3)
}

function getUsers() {
  const start = 130854;
  const now = new Date().getTime();
  return Math.floor(start + (now - 1705410978000) / 1000 / 60)
}

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-4 w-full p-5 md:p-6 md:px-0 bg-[#080531] rounded-2xl">
    <div class="text-sm md:text-lg text-white/60 font-medium">
      Bets placed on
      <a href="https://hypeloot.com" target="_blank" class="text-white">
        hypeloot.com
      </a>
    </div>
    <div class="flex justify-center items-center gap-3 md:gap-4">
      <span class="flex font-extrabold text-xl md:text-4xl bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text">
        <span
          v-for="(item, index) in bets"
          :key="index"
          class="block w-3 md:w-6 text-center"
          :class="{ '!w-2 md:!w-3': ['&nbsp;', ','].includes(item) }"
        >
          {{ item }}
        </span>
      </span>
      <span class="text-sm md:text-lg text-white/60 font-medium">
        by
      </span>
      <span class="flex font-extrabold text-xl md:text-4xl bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text">
        <span
          v-for="(item, index) in users"
          :key="index"
          class="block w-3 md:w-6 text-center"
          :class="{ '!w-2 md:!w-3': ['&nbsp;', ','].includes(item) }"
        >
          {{ item }}
        </span>
      </span>
      <span class="text-sm md:text-lg text-white/60 font-medium">
        users
      </span>
    </div>
  </div>
</template>