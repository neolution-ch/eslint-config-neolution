import { ConfigurationType } from "../types/configuration-type.js";

const nextJsConfig: ConfigurationType = {
  defaults: true,
  esLintRecommended: true,
  typescript: true,
  unicorn: true,
  import: true,
  prettierRecommended: true,
  jsdoc: true,
  onlyError: true,
};

export default nextJsConfig;
