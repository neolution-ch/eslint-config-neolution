import eslintPluginUnicorn from "eslint-plugin-unicorn";
import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "neolution/unicorn",
    rules: {
      "unicorn/name-replacements": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/no-null": "off",

      // Conflicts with the JSDoc comment style that eslint-plugin-jsdoc expects
      // (and that `jsdocRequireJsdoc` enforces): it removes the leading `*` of every
      // line in a documentation comment.
      "unicorn/no-asterisk-prefix-in-documentation-comments": "off",
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
      "unicorn/filename-case": [
        "error",
        // since unicorn v78 directory names are checked too, only the file name is meant here
        { case: "kebabCase", checkDirectories: false },
      ],
    },
  },
  {
    name: "neolution/unicorn/components",
    files: ["**/components/**/*.tsx"],
    rules: {
      "unicorn/filename-case": [
        "error",
        // since unicorn v78 directory names are checked too, only the file name is meant here
        { case: "pascalCase", checkDirectories: false },
      ],
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
