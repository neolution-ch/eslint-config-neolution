declare type ConfigurationType = {
  defaults?: boolean;
  esLintRecommended?: boolean;
  typescript?: boolean;
  unicorn?: boolean;
  reactRecommended?: boolean;
  reactJsxRuntime?: boolean;
  import?: boolean;
  prettierRecommended?: boolean;
  next?: boolean;
  reactHooks?: boolean;
  cypressRecommended?: boolean;
  jsdoc?: boolean;
  onlyError?: boolean;
  noOnlyTests?: boolean;
  overrides?: import("typescript-eslint").InfiniteDepthConfigWithExtends;
};
