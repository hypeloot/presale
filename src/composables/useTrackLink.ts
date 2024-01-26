import { useSetCookie } from "./useCookie";
import { useApiGet } from "./useApi";

export const useTrackLink = async (name: string) => {
  const date = new Date();
  date.setHours(23, 59, 59, 999);

  const cookie = useSetCookie("tracking_link", {
    path: "/",
    expires: date,
  });

  cookie.value = String(name);
  await useApiGet(`/api/presale/tl/${name}`);
};
