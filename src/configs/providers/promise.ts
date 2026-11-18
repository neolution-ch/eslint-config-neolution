import pluginPromise from "eslint-plugin-promise";
import type { TSESLint } from "@typescript-eslint/utils";

const promiseRules: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "neolution/promise",
    plugins: { promise: pluginPromise },
    rules: {
      // async/await reads top to bottom and keeps try/catch for errors. The rule still allows
      // .then() inside an await or a constructor, where await is not an option.
      "promise/prefer-await-to-then": "error",
    },
  },
];

export default promiseRules;
