import { config, configs } from "typescript-eslint";

const typescriptRules = config(
  configs.eslintRecommended,
  configs.recommended,
  configs.recommendedTypeChecked.map((rule) => ({
    ...rule,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
  })),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: true,
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
    rules: {
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/unbound-method": "off",

      // https://github.com/typescript-eslint/typescript-eslint/issues/2621
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
);

export default typescriptRules;
