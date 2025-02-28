declare module "eslint-plugin-only-error" {
  const onlyError: Omit<import("typescript-eslint").Plugin, "configs">;
  export = onlyError;
}
