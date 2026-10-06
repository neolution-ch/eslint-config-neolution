declare module "eslint-plugin-cypress" {
  type ConfigsType = {
    configs: {
      recommended: import("typescript-eslint").InfiniteDepthConfigWithExtends;
    };
  };
  const configs: ConfigsType;
  export = configs;
}
