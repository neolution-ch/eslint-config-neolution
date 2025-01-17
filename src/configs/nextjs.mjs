import esLint from "@eslint/js";
import { config, configs as typeScriptEslintConfigs } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unicornRules from "./unicorn.mjs";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const nextJsRules = config(
  {
    settings: {
      react: {
        version: "17",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
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
  typeScriptEslintConfigs.recommended,
  unicornRules,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  ...compat.extends("plugin:@next/next/recommended"),
  importPlugin.flatConfigs.recommended,
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:prettier/recommended"),
);

export default nextJsRules;
