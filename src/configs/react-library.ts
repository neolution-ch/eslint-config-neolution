import { ConfigurationType } from "../types/configuration-type.js";

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
};

export default reactLibraryConfig;
