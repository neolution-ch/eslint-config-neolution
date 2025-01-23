import { config, configs } from "typescript-eslint";

const typescriptRules = config(configs.recommended, {
  files: ["**/*.js", "**/*.jsx"],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
  },
});

export default typescriptRules;
