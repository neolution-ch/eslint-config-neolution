import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { config } from "typescript-eslint";

const unicornRules = config(eslintPluginUnicorn.configs["flat/recommended"], {
  rules: {
    "unicorn/prevent-abbreviations": "off",
    "filename-case": "off",
  },
});

export default unicornRules;
