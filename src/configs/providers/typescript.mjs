import { config, configs } from "typescript-eslint";

const typescriptRules = config(
  configs.eslintRecommended,
  configs.recommended,
  configs.recommendedTypeChecked,
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);

export default typescriptRules;
