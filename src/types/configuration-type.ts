/**
 * The ConfigurationType interface defines the structure of a configuration object.
 */
export type ConfigurationType = {
  /**
   * The default configuration for the linter. If set to true, it will use the default configuration.
   */
  defaults?: boolean;
  /**
   * The recommended ESLint configuration. If set to true, it will use the recommended configuration.
   */
  esLintRecommended?: boolean;
  /**
   * The recommended configuration for TypeScript. If set to true, it will use the recommended configuration.
   */
  typescript?: boolean;
  /**
   * The recommended configuration for unicorn. If set to true, it will use the recommended configuration.
   */
  unicorn?: boolean;
  /**
   * The recommended configuration for React. If set to true, it will use the recommended configuration.
   */
  reactRecommended?: boolean;
  /**
   * The recommended configuration for React with JSX runtime. If set to true, it will use the recommended configuration.
   */
  reactJsxRuntime?: boolean;
  /**
   * The recommended configuration for import rules. If set to true, it will use the recommended configuration.
   */
  import?: boolean;
  /**
   * The recommended configuration for Prettier. If set to true, it will use the recommended configuration.
   */
  prettierRecommended?: boolean;
  /**
   * The recommended configuration for Next.js. If set to true, it will use the recommended configuration.
   */
  next?: boolean;
  /**
   * The recommended configuration for React hooks. If set to true, it will use the recommended configuration.
   */
  reactHooks?: boolean;
  /**
   * The recommended configuration for Cypress. If set to true, it will use the recommended configuration.
   */
  cypressRecommended?: boolean;
  /**
   * The recommended configuration for Jsdoc. If set to true, it will use the recommended configuration.
   */
  jsdoc?: boolean;
  /**
   * If set to true, it will only show errors in the linter output. This is useful for CI/CD pipelines where you only want to see errors and not warnings.
   */
  onlyError?: boolean;
  /**
   * If set to true, it will prevent the use of "only"-tests.
   */
  noOnlyTests?: boolean;
  /**
   * The recommended configuration for Jest. If set to true, it will use the recommended configuration.
   */
  jest?: boolean;
  /**
   * The overrides for the configuration. This is useful for customizing the configuration for specific files or directories or rules.
   */
  overrides?: import("typescript-eslint").InfiniteDepthConfigWithExtends;
};
