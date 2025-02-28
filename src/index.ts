import nextjs from "./configs/nextjs.js";
import javascript from "./configs/javascript.js";
import cypress from "./configs/cypress.js";
import reactLibrary from "./configs/react-library.js";
import typescript from "./configs/typescript.js";
import getConfig from "./configs/get-config.js";

const configs = {
  flat: {
    nextjs: getConfig(nextjs),
    javascript: getConfig(javascript),
    cypress: getConfig(cypress),
    "react-library": getConfig(reactLibrary),
    typescript: getConfig(typescript),
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

export default {
  configs,
};
