import { useToast } from "vue-toast-notification";
import { useApiPost } from "./useApi";

const SUBSCRIBE_URL = "/api/presale/subscribe";

export const useSubscribe = (email: string, captcha: string) => {
  const toast = useToast({
    position: "bottom",
  });

  const subscribe = async () => {
    const response = await useApiPost(SUBSCRIBE_URL, {
      body: {
        email,
        "g-recaptcha-response": captcha,
      },
    });

    if (response.status === 200) {
      toast.success("You have been subscribed to the presale mailing list!");
    } else {
      toast.error("Something went wrong, please try again later.");
    }

    return response;
  };

  return { subscribe };
};
