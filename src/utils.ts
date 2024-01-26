export function updateState(
  state: Record<string, unknown>,
  update: Record<string, any>
): void {
  Object.keys(state).forEach((key) => {
    state[key] = update[key];
  });
}

export function zeroPad(value: string, length: number): string {
  return value.padStart(length, "0");
}

export function transformZeroPads(props: Record<string, number>) {
  const formattedProps: Record<string, string | number> = {};

  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value);
  });

  return formattedProps;
}
