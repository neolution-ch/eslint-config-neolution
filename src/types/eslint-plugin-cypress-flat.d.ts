declare module "eslint-plugin-cypress/flat" {
  type ConfigsType = {
    configs: {
      recommended: import("typescript-eslint").InfiniteDepthConfigWithExtends;
    };
  };
  const configs: ConfigsType;
  export = configs;
}
