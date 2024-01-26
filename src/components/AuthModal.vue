<script setup lang="ts">
import { ref } from "vue";

import Modal from "./Modal.vue";
import RegisterForm from "./RegisterForm.vue";
import LoginForm from "./LoginForm.vue";
import SocialAuth from "./SocialAuth.vue";

const view = ref<"register" | "login">("register");
</script>

<template>
  <Modal>
    <div class="flex flex-col gap-5 md:gap-7">
      <div class="flex gap-7">
        <button
          class="text-xl font-semibold text-white/50 uppercase"
          :class="{ '!text-white': view === 'register' }"
          @click="view = 'register'"
        >
          Sign up
        </button>
        <button
          class="text-xl font-semibold text-white/50 uppercase"
          :class="{ '!text-white': view === 'login' }"
          @click="view = 'login'"
        >
          Login
        </button>
      </div>

      <SocialAuth />

      <RegisterForm v-if="view === 'register'" />
      <LoginForm v-else />
    </div>
  </Modal>
</template>