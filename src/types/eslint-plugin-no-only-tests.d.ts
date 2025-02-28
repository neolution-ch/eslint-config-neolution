declare module "eslint-plugin-no-only-tests" {
  const onlyError: Omit<import("typescript-eslint").Plugin, "configs">;
  export = onlyError;
}
