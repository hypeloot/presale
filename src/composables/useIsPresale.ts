export const useIsPresale = () => {
  const isPresale = ["presale", "localhost"].some((item) =>
    window.location.hostname.includes(item)
  );

  return { isPresale };
};
