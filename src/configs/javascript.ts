import { ConfigurationType } from "../types/configuration-type.js";

const javascriptConfig: ConfigurationType = {
  defaults: true,
  esLintRecommended: true,
  unicorn: true,
  import: true,
  prettierRecommended: true,
  jsdoc: true,
  onlyError: true,
  promise: true,
};

export default javascriptConfig;
