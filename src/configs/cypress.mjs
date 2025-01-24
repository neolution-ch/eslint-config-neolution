import esLint from "@eslint/js";
import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unicornRules from "./providers/unicorn.mjs";
import defaults from "./providers/default.mjs";
import typescriptRules from "./providers/typescript.mjs";
import { fixupConfigRules } from "@eslint/compat";
import pluginCypress from "eslint-plugin-cypress/flat";

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
    importPlugin.flatConfigs.recommended,
    ...compat.extends("plugin:prettier/recommended"),
    pluginCypress.configs.recommended,
    {
      plugins: {
        "no-only-tests": "no-only-tests",
      },
    },
  ),
);

export default cypressRules;
