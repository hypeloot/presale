<script setup lang="ts">
import HomePage from "../home/index.vue"
import ShortPage from "../short/index.vue"
import { useIsPresale } from "../../composables/useIsPresale"

const { isPresale } = useIsPresale()
</script>

<template>
  <HomePage v-if="isPresale" />
  <ShortPage v-else />
</template>