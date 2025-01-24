import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import typescriptRules from "./providers/typescript.mjs";
import { fixupConfigRules } from "@eslint/compat";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const reactLibraryRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    typescriptRules,
    unicornRules,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    importPlugin.flatConfigs.recommended,
    ...compat.extends("plugin:react-hooks/recommended"),
    ...compat.extends("plugin:prettier/recommended"),
  ),
);

export default reactLibraryRules;
