<template>
  <div class="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-2">
    <LoaderIcon class="w-10 h-10 animate-spin" />
    <p class="ml-2 text-lg">Redirecting...</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTrackLink } from "../../composables/useTrackLink";
import LoaderIcon from "../../components/icons/LoaderIcon.vue";

const route = useRoute();
const router = useRouter();
const link = route.params.link as string;

onMounted(async () => {
  await useTrackLink(link);

  const query = Object.fromEntries(
    Object.entries(route.query).filter(([key]) => key !== "utm_source")
  );

  const navigateTo = (path: string) => {
    router.push({
      path,
      query,
    });
  };

  const redirect = route.query.redirect as string | undefined;
  navigateTo(redirect || "/");
})
</script>