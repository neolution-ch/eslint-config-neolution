const reactLibraryConfig: ConfigurationType = {
  defaults: true,
  esLintRecommended: true,
  typescript: true,
  unicorn: true,
  reactRecommended: true,
  reactJsxRuntime: true,
  import: true,
  reactHooks: true,
  prettierRecommended: true,
  jsdoc: true,
  onlyError: true,
  overrides: {
    rules: {
      "unicorn/no-null": "off",
    },
  },
};

export default reactLibraryConfig;
