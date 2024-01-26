<template>
  <div class="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-2">
    <LoaderIcon class="w-10 h-10 animate-spin" />
    <p class="ml-2 text-lg">Loading...</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useSocialHandle, useSocialLogin } from "../../composables/useAuth";
import LoaderIcon from "../../components/icons/LoaderIcon.vue";

const route = useRoute();
const provider = route.params.provider as string;

onMounted(async () => {
  switch (provider) {
    case 'steam':
      const access_token = route.query.provider_access_token as string;
      await useSocialLogin({ provider, access_token })
      break

    default:
      const code = route.query.code as string;
      await useSocialHandle({ provider, code })
      break
  }
})
</script>