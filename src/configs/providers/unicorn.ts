import eslintPluginUnicorn from "eslint-plugin-unicorn";
import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "neolution/unicorn",
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/no-null": "off",
      "unicorn/no-useless-undefined": [
        "error",
        { checkArrowFunctionBody: false },
      ],
    },
  },
  {
    name: "neolution/unicorn/pages",
    files: ["**/pages/**/*.page.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
  },
  {
    name: "neolution/unicorn/components",
    files: ["**/components/**/*.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "pascalCase" }],
    },
  },
  {
    name: "neolution/unicorn/javascript-files",
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
];

const unicornRules: InfiniteDepthConfigWithExtends = [
  eslintPluginUnicorn.configs.recommended,
  ...rules,
];

const unicornRulesUnopinionated: InfiniteDepthConfigWithExtends = [
  eslintPluginUnicorn.configs["unopinionated"],
  ...rules,
];

export { unicornRules, unicornRulesUnopinionated };
