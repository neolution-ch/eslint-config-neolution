declare module "eslint-plugin-promise" {
  const pluginPromise: Omit<import("typescript-eslint").Plugin, "configs">;
  export = pluginPromise;
}
