<script setup lang="ts">
import * as yup from "yup";

import { useForm } from "vee-validate";
import { useLogin } from "../composables/useAuth";

import Input from "./Input.vue";
import Button from "./Button.vue";

type Values = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const { handleSubmit, isSubmitting } = useForm<Values>({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
});

const onSubmit = handleSubmit(async ({ email, password }) => {
  await useLogin({
    email,
    password,
  });
});
</script>

<template>
  <form class="flex flex-col gap-5 md:gap-7" @submit="onSubmit">
    <div class="flex flex-col gap-3">
      <Input name="email" type="text" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
    </div>

    <Button type="submit" :loading="isSubmitting">
      Submit
    </Button>
  </form>
</template>