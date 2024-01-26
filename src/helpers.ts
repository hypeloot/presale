export function isStageEnv() {
  return ["localhost", "stage"].some((env) =>
    window.location.hostname.includes(env)
  );
}
