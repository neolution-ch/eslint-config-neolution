import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { config } from "typescript-eslint";

const unicornRules = config(eslintPluginUnicorn.configs["flat/recommended"], {
  rules: {
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    "unicorn/no-await-expression-member": "off",
  },
});

export default unicornRules;
