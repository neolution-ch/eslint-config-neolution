import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import typescriptRules from "./providers/typescript.mjs";
import { fixupConfigRules } from "@eslint/compat";
import jsdoc from "eslint-plugin-jsdoc";
import onlyError from "eslint-plugin-only-error";

import { FlatCompat } from "@eslint/eslintrc";
import importRules from "./providers/importPlugin.mjs";

const compat = new FlatCompat();

const nextJsRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    typescriptRules,
    unicornRules,
    importRules,
    ...compat.extends("plugin:prettier/recommended"),
    jsdoc.configs["flat/recommended"],
    { plugins: { "only-error": onlyError } },
  ),
);

export default nextJsRules;
