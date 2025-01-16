import esLint from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import typeScriptEslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import-x";
import eslintConfigPrettier from "eslint-config-prettier";

import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextJsRules = typeScriptEslint.config(
  esLint.configs.recommended,
  typeScriptEslint.configs.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginPrettierRecommended,
  ...compat.extends("plugin:@next/next/recommended"),
  importPlugin.flatConfigs.warnings,
  ...compat.extends("plugin:react-hooks/recommended"),
  eslintConfigPrettier,
);

export default nextJsRules;
