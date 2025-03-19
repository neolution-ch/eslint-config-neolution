import { config } from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const reactHooksRules = config(
  compat.extends("plugin:react-hooks/recommended"),
  {
    rules: {
      "react-hooks/rules-of-hooks": "error",
    },
  },
);

export default reactHooksRules;
