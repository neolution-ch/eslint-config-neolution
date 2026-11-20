import nextjs from "./configs/nextjs.js";
import javascript from "./configs/javascript.js";
import cypress from "./configs/cypress.js";
import reactLibrary from "./configs/react-library.js";
import typescript from "./configs/typescript.js";
import type { Linter } from "eslint";
import getConfig from "./configs/get-config.js";

// The presets are built on first access instead of on import, so a project that only
// uses `getConfig` (for example without the optional prettier packages) does not
// load the presets it does not use.
const configs = {
  flat: {
    get nextjs(): Linter.Config[] {
      return getConfig(nextjs);
    },
    get javascript(): Linter.Config[] {
      return getConfig(javascript);
    },
    get cypress(): Linter.Config[] {
      return getConfig(cypress);
    },
    get "react-library"(): Linter.Config[] {
      return getConfig(reactLibrary);
    },
    get typescript(): Linter.Config[] {
      return getConfig(typescript);
    },
    getConfig,
    defaults: {
      nextjs,
      javascript,
      cypress,
      "react-library": reactLibrary,
      typescript,
    },
  },
};

export type { ConfigurationType } from "./types/configuration-type.js";
export default {
  configs,
};
