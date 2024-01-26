<script setup lang="ts">
import { ref } from "vue"
import { useForm, useField } from "vee-validate"
import { useSubscribe } from "../composables/useSubscribe"
import { useCaptcha } from "../composables/useCaptcha"

type Values = {
  email: string
}

const success = ref<boolean>(false)
const { values, meta, handleSubmit, isSubmitting } = useForm<Values>({
  initialValues: {
    email: "",
  },
});

const isEmail = (value: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(value.toLowerCase())
}

const { handleChange } = useField("email", (value: string) => {
  if (!value) {
    return "Email is required"
  }

  if (!isEmail(value)) {
    return "Email must be valid"
  }

  return true
})

const onSubmit = handleSubmit(async (values) => {
  const token = await useCaptcha("presale")
  const { subscribe } = useSubscribe(values.email, token ?? "")
  const response = await subscribe()

  if (response.status === 200) {
    success.value = true

    setTimeout(() => {
      success.value = false
    }, 3000)
  }
});
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <p class="text-xs text-white/60 text-center font-medium md:text-sm">
      Get notified (About the Hypeloot Token and Airdrops)
    </p>
    <form class="relative" @submit="onSubmit">
      <input
        type="text"
        name="email"
        @input="handleChange"
        placeholder="Enter your email"
        class="w-full h-12 md:h-14 px-5 text-white bg-transparent border border-white/20 rounded-lg focus:outline-none"
      />
      <button
        type="submit"
        class="absolute top-1/2 right-5 -translate-y-1/2 font-semibold uppercase flex items-center gap-2.5 disabled:opacity-50"
        :disabled="!meta.valid || isSubmitting"
        :class="{
          'text-white/50': !values.email,
          'text-[#FFDA14]': values.email,
          '!text-[#3ADB4A]': success
        }"
      >
        <svg v-if="success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8.79998 15.9054L5.29998 12.4054C4.90998 12.0154 4.28998 12.0154 3.89998 12.4054C3.50998 12.7954 3.50998 13.4154 3.89998 13.8054L8.08998 17.9954C8.47998 18.3854 9.10998 18.3854 9.49998 17.9954L20.1 7.40539C20.49 7.01539 20.49 6.39539 20.1 6.00539C19.71 5.61539 19.09 5.61539 18.7 6.00539L8.79998 15.9054Z" fill="#3ADB4A"/>
        </svg>
        {{ success ? "Success" : "Apply" }}
      </button>
    </form>
  </div>
</template>