import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import nextRules from "./providers/next.mjs";
import { fixupConfigRules } from "@eslint/compat";

import { FlatCompat } from "@eslint/eslintrc";
import importRules from "./providers/importPlugin.mjs";

const compat = new FlatCompat();

const javascriptRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    unicornRules,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    ...compat.extends("plugin:prettier/recommended"),
    nextRules,
    importRules,
    ...compat.extends("plugin:react-hooks/recommended"),
  ),
);

export default javascriptRules;
