import esLint from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import typeScriptEslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import-x";
import eslintConfigPrettier from "eslint-config-prettier";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const nextJsRules = typeScriptEslint.config(
  esLint.configs.recommended,
  typeScriptEslint.configs.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintConfigPrettier,
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:@next/next/recommended"),
  importPlugin.flatConfigs.recommended,
  ...compat.extends("plugin:react-hooks/recommended"),
);

export default nextJsRules;
