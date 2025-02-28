declare module "eslint-plugin-import" {
  type ImportPlugin = {
    flatConfigs: {
      recommended: import("typescript-eslint").InfiniteDepthConfigWithExtends;
    };
  };
  const importPlugin: ImportPlugin;
  export = importPlugin;
}
