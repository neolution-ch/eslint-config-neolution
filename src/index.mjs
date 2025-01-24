import nextjs from "./configs/nextjs.mjs";
import javascript from "./configs/javascript.mjs";
import cypress from "./configs/cypress.mjs";
import reactLibrary from "./configs/react-library.mjs";
import typescript from "./configs/typescript.mjs";

const configs = {
  flat: {
    nextjs,
    javascript,
    cypress,
    "react-library": reactLibrary,
    typescript,
  },
};

export default {
  configs,
};
