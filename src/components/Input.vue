<script setup lang="ts">
import { defineProps } from 'vue'
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string
  type: 'text' | 'email' | 'password'
  placeholder?: string
}>()

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div class="flex flex-col gap-1">
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      class="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:border-primary placeholder:text-white/50"
    />
    <div v-if="errorMessage" class="text-[#F00] text-xs">
      {{ errorMessage }}
    </div>
  </div>
</template>