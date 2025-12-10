import { config } from "typescript-eslint";
import esLint from "@eslint/js";
const esLintRules = config(esLint.configs.recommended, {
  rules: {
    // Enforce double quotes
    quotes: ["error", "double", { avoidEscape: true }],

    // Prefer string interpolation
    "prefer-template": "error",

    "prefer-destructuring": "error",
    "no-empty-function": "error",
    "arrow-body-style": ["error", "as-needed"],
    eqeqeq: ["error", "always"],
  },
});

export default esLintRules;
