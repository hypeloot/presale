<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import LoaderIcon from './icons/LoaderIcon.vue'

defineProps<{
  type?: 'submit' | 'button',
  loading?: boolean
  disabled?: boolean
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button
    :type="type"
    :disabled="loading || disabled"
    class="relative flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
    @click="emit('click')"
  >
    <div v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoaderIcon class="w-6 h-6 mr-2 animate-spin" />
    </div>
    <div class="flex" :class="{ 'opacity-0': loading }">
      <slot />
    </div>
  </button>
</template>