import { useVfm } from "vue-final-modal";
import { useToast } from "vue-toast-notification";
import { useApiGet, useApiPost, useApiError } from "./useApi";
import { useSetCookie, useRemoveCookie, useGetCookie } from "./useCookie";
import { User } from "../types/user";
import useStore from "../store";
import config from "../config";
import { useRouter } from "vue-router";

type AuthResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

type UserResponse = {
  data: User;
};

const REGISTER_URL = "/api/presale/auth/register";
const OAUTH_TOKEN_URL = "/oauth/token";
const SOCIAL_HANDLE_URL = "/presale/social/handle";
const PROFILE_URL = "/api/presale/profile";
const LOGOUT_URL = "/api/profile/logout";

export const useRegister = async ({
  name,
  email,
  password,
  captcha,
}: {
  name: string;
  email: string;
  password: string;
  captcha: string;
}) => {
  const toast = useToast({
    position: "bottom",
  });

  const response = await useApiPost(REGISTER_URL, {
    body: {
      name,
      email,
      password,
      "g-recaptcha-response": captcha,
    },
  });

  if (response.status === 200) {
    toast.success("You have successfully registered!");
  } else {
    const data = await response.json();
    useApiError(data);
  }

  return response;
};

export const useSuccessLogin = async (data: AuthResponse) => {
  const expires = new Date(new Date().getTime() + data.expires_in * 1000);
  const accessToken = useSetCookie("access_token", { expires });
  const refreshToken = useSetCookie("refresh_token", { expires });

  accessToken.value = data.access_token;
  refreshToken.value = data.refresh_token;

  await useProfile();
};

export const useLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const vfm = useVfm();
  const toast = useToast({
    position: "bottom",
  });

  const response = await useApiPost(OAUTH_TOKEN_URL, {
    body: {
      grant_type: "password",
      client_id: config.clientId,
      client_secret: config.clientSecret,
      username: email,
      password: password,
      scope: "*",
    },
  });

  if (response.status === 200) {
    vfm.closeAll();
    toast.success("You have successfully logged in!");
    const data = await response.json();
    await useSuccessLogin(data);
  } else {
    const data = await response.json();
    useApiError(data);
  }

  return response;
};

export const useSocialHandle = async ({
  provider,
  code,
}: {
  provider: string;
  code: string;
}) => {
  const router = useRouter();
  const response = await useApiPost(SOCIAL_HANDLE_URL, {
    body: {
      query: { provider, code },
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    const { provider, access_token } = data ?? {};
    await useSocialLogin({ provider, access_token });
    await router.push("/");
  } else {
    const data = await response.json();
    useApiError(data);
  }

  return response;
};

export const useSocialLogin = async ({
  provider,
  access_token,
}: {
  provider: string;
  access_token: string;
}) => {
  const vfm = useVfm();
  const toast = useToast({
    position: "bottom",
  });

  const response = await useApiPost(OAUTH_TOKEN_URL, {
    body: {
      method: "presale",
      grant_type: "social",
      client_id: config.clientId,
      client_secret: config.clientSecret,
      provider: provider,
      access_token: access_token,
      scope: "*",
    },
  });

  if (response.status === 200) {
    vfm.closeAll();
    toast.success("You have successfully logged in!");
    const data = await response.json();
    await useSuccessLogin(data);
  } else {
    const data = await response.json();
    useApiError(data);
  }

  return response;
};

export const useIsLoggedIn = () => {
  const accessToken = useGetCookie("access_token");
  const refreshToken = useGetCookie("refresh_token");

  return accessToken.value && refreshToken.value;
};

export const useLogout = async () => {
  await useApiPost(LOGOUT_URL);

  const store = useStore();
  const toast = useToast({
    position: "bottom",
  });

  const { remove: removeAccessToken } = useRemoveCookie("access_token");
  const { remove: removeRefreshToken } = useRemoveCookie("refresh_token");

  store.user = null;

  removeAccessToken();
  removeRefreshToken();

  toast.success("You have successfully logged out!");
};

export const useProfile = async () => {
  const response = await useApiGet(PROFILE_URL);
  const store = useStore();

  if (response.status === 200) {
    const data = await response.json();
    store.user = data.data;
    return data as UserResponse;
  } else {
    const data = await response.json();
    useApiError(data);
    await useLogout();
  }
};
