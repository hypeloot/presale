import { load } from "recaptcha-v3";

const SITE_KEY = "6Le7qS0mAAAAAN9c9MTkCCvLsYtxwjbVMm4oRuX1";

export const useCaptcha = async (action: string) => {
  const recaptcha = await load(SITE_KEY);
  const token = await recaptcha.execute(action);
  return token;
};
