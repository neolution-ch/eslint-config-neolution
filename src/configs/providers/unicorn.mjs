import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { config } from "typescript-eslint";

const unicornRules = config(
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/prefer-query-selector": "off",
    },
  },
  {
    files: ["**/pages/**/*.page.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
  },
  {
    files: ["**/components/**/*.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "pascalCase" }],
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
);

export default unicornRules;
