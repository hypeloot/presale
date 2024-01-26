export const useGetCookie = (name: string) => {
  const getCookie = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name));

    if (cookie) {
      const value = cookie.split("=")[1];
      return value;
    }

    return null;
  };

  return {
    get value() {
      return getCookie();
    },
  };
};

type Options = {
  expires?: Date;
  path?: string;
};

export const useSetCookie = (name: string, options?: Options) => {
  const setCookie = (value: string) => {
    const cookie = `${name}=${value}; expires=${options?.expires?.toUTCString()}; path=${
      options?.path
    };`;
    document.cookie = cookie;
  };

  return {
    set value(value: string) {
      setCookie(value);
    },
  };
};

export const useRemoveCookie = (name: string) => {
  const removeCookie = () => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  };

  return {
    remove: removeCookie,
  };
};
