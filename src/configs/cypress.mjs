import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import typescriptRules from "./providers/typescript.mjs";
import importRules from "./providers/importPlugin.mjs";
import { fixupConfigRules } from "@eslint/compat";
import pluginCypress from "eslint-plugin-cypress/flat";
import noOnlyTests from "eslint-plugin-no-only-tests";
import jsdoc from "eslint-plugin-jsdoc";
import onlyError from "eslint-plugin-only-error";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const cypressRules = fixupConfigRules(
  config(
    defaults,
    esLint.configs.recommended,
    typescriptRules,
    unicornRules,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat["jsx-runtime"],
    importRules,
    ...compat.extends("plugin:prettier/recommended"),
    pluginCypress.configs.recommended,
    jsdoc.configs["flat/recommended"],
    { plugins: { "only-error": onlyError } },
    {
      plugins: {
        "no-only-tests": noOnlyTests,
      },
      rules: {
        "no-only-tests/no-only-tests": "error",
      },
    },
  ),
);

export default cypressRules;
