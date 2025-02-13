import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import typescriptRules from "./providers/typescript.mjs";
import { fixupConfigRules } from "@eslint/compat";
import jsdoc from "eslint-plugin-jsdoc";
import onlyError from "eslint-plugin-only-error";

import { FlatCompat } from "@eslint/eslintrc";
import importRules from "./providers/importPlugin.mjs";

const compat = new FlatCompat();

const reactLibraryRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    typescriptRules,
    unicornRules,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    importRules,
    ...compat.extends("plugin:react-hooks/recommended"),
    ...compat.extends("plugin:prettier/recommended"),
    jsdoc.configs["flat/recommended"],
    { plugins: { "only-error": onlyError } },
  ),
);

export default reactLibraryRules;
