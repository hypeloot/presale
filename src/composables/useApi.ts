import { useToast } from "vue-toast-notification";
import { useGetCookie } from "./useCookie";
import { isStageEnv } from "../helpers";

type ApiError = {
  msg: string;
  message: string;
};

const BASE_URL = {
  stage: "https://api.stage.hypeloot.com",
  prod: "https://api.hypeloot.com",
};

const isStage = isStageEnv();

export const useBaseUrl = () => {
  const baseUrl = isStage ? BASE_URL.stage : BASE_URL.prod;
  return { baseUrl };
};

export const useGetHeeaders = () => {
  const accessToken = useGetCookie("access_token");
  const trackingLink = useGetCookie("tracking_link");

  const headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (accessToken.value) {
    headers["authorization"] = `Bearer ${accessToken.value}`;
  }

  if (trackingLink.value) {
    headers["X-TLink"] = trackingLink.value;
  }

  return { headers };
};

export const useApiGet = async (url: string, options?: RequestInit) => {
  const { baseUrl } = useBaseUrl();
  const { headers } = useGetHeeaders();

  const response = await fetch(baseUrl + url, {
    headers,
    method: "GET",
    ...options,
  });

  return response;
};

export const useApiPost = async (url: string, data: any = {}) => {
  const { baseUrl } = useBaseUrl();
  const { headers } = useGetHeeaders();

  const response = await fetch(baseUrl + url, {
    headers,
    method: "POST",
    body: JSON.stringify(data.body),
  });

  return response;
};

export const useApiError = async (error: ApiError) => {
  const toast = useToast({
    position: "bottom",
  });

  if (error) {
    if (error.message) {
      toast.error(error.message);
    } else if (error.msg) {
      toast.error(error.msg);
    }
  } else {
    toast.error("Something went wrong. Please try again later.");
  }

  return error;
};
