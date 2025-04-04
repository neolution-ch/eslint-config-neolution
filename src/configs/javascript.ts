import { ConfigurationType } from "../types/configuration-type.js";

const javascriptConfig: ConfigurationType = {
  defaults: true,
  esLintRecommended: true,
  unicorn: true,
  reactRecommended: true,
  reactJsxRuntime: true,
  prettierRecommended: true,
  next: true,
  import: true,
  reactHooks: true,
  onlyError: true,
  jsdoc: true,
};

export default javascriptConfig;
