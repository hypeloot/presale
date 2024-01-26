<script setup lang="ts">
import { onMounted } from "vue";
import { ModalsContainer } from "vue-final-modal";
import { useIsLoggedIn, useProfile } from "./composables/useAuth";

const isLoggedIn = useIsLoggedIn();

onMounted(() => {
  if (isLoggedIn) {
    console.log("User is logged in");
    useProfile();
  }
});
</script>

<template>
  <router-view></router-view>
  <ModalsContainer />
</template>
