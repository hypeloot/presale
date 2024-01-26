<script setup lang="ts">
import * as yup from "yup";

import { useForm } from "vee-validate";
import { useRegister } from "../composables/useAuth";
import { useCaptcha } from "../composables/useCaptcha";

import Input from "./Input.vue";
import Button from "./Button.vue";

type Values = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const { handleSubmit, isSubmitting } = useForm<Values>({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    password: "",
  },
});

const onSubmit = handleSubmit(async ({ name, email, password }) => {
  const captcha = await useCaptcha("register");
  await useRegister({
    name,
    email,
    password,
    captcha,
  });
});
</script>

<template>
  <form class="flex flex-col gap-5 md:gap-7" @submit="onSubmit">
    <div class="flex flex-col gap-3">
      <Input name="name" type="text" placeholder="Username" />
      <Input name="email" type="text" placeholder="Enter your email address" />
      <Input name="password" type="password" placeholder="Create a Password" />
    </div>

    <Button type="submit" :loading="isSubmitting">
      Submit
    </Button>
  </form>
</template>