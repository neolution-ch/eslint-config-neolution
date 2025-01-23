import esLint from "@eslint/js";
import { config, configs as typeScriptEslintConfigs } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import next from "./providers/next.mjs";
import { fixupConfigRules } from "@eslint/compat";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const nextJsRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    typeScriptEslintConfigs.recommended,
    unicornRules,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    next,
    importPlugin.flatConfigs.recommended,
    ...compat.extends("plugin:react-hooks/recommended"),
    ...compat.extends("plugin:prettier/recommended"),
  ),
);

export default nextJsRules;
