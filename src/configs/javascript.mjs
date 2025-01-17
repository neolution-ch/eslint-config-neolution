import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unicornRules from "./unicorn.mjs";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const javascriptRules = config(
  {
    settings: {
      react: {
        version: "17",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json"],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  esLint.configs.recommended,
  unicornRules,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:@next/next/recommended"),
  importPlugin.flatConfigs.recommended,
  ...compat.extends("plugin:react-hooks/recommended"),
);

export default javascriptRules;
