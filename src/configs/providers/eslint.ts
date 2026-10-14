import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import esLint from "@eslint/js";
const esLintRules: InfiniteDepthConfigWithExtends = [
  esLint.configs.recommended,
  {
    rules: {
      // @eslint/js v10 only adds these rules to the recommended config, but it declares
      // a peer dependency on eslint v10. We stay on v9 and enable them here, so the
      // rules are the same on ESLint v9 and v10 without a peer dependency warning.
      "no-unassigned-vars": "error",
      "no-useless-assignment": "error",
      "preserve-caught-error": "error",

      // Enforce double quotes
      quotes: ["error", "double", { avoidEscape: true }],

      // Prefer string interpolation
      "prefer-template": "error",

      "prefer-destructuring": "error",
      "no-empty-function": "error",
      "arrow-body-style": ["error", "as-needed"],
      eqeqeq: ["error", "always"],
    },
  },
];

export default esLintRules;
