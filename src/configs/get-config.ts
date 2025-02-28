import { config, InfiniteDepthConfigWithExtends } from "typescript-eslint";
import { FixupConfigArray, fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import defaults from "./providers/default.js";
import esLint from "@eslint/js";
import typescriptRules from "./providers/typescript.js";
import unicornRules from "./providers/unicorn.js";
import eslintPluginReact from "eslint-plugin-react";
import importRules from "./providers/importPlugin.js";
import nextRules from "./providers/next.js";
import pluginCypress from "eslint-plugin-cypress/flat";
import jsdocRules from "./providers/jsdoc.js";
import onlyError from "eslint-plugin-only-error";
import noOnlyTests from "eslint-plugin-no-only-tests";

const getConfig = (ruleConfig: ConfigurationType) => {
  const compat = new FlatCompat();
  const {
    defaults: includeDefaults,
    esLintRecommended,
    typescript,
    unicorn,
    reactRecommended,
    reactJsxRuntime,
    import: includeImport,
    prettierRecommended,
    next: includeNext,
    reactHooks,
    cypressRecommended,
    jsdoc,
    onlyError: includeonlyError,
    noOnlyTests: includeonlyNoOnlyTests,
    overrides,
  } = ruleConfig;
  const configs = new Array<InfiniteDepthConfigWithExtends>();

  if (includeDefaults) {
    configs.push(defaults);
  }

  if (esLintRecommended) {
    configs.push(esLint.configs.recommended);
  }

  if (typescript) {
    configs.push(typescriptRules);
  }

  if (unicorn) {
    configs.push(unicornRules);
  }

  if (reactRecommended) {
    configs.push(eslintPluginReact.configs.flat.recommended);
  }

  if (reactJsxRuntime) {
    configs.push(eslintPluginReact.configs.flat["jsx-runtime"]);
  }

  if (includeImport) {
    configs.push(importRules);
  }

  if (prettierRecommended) {
    configs.push(...compat.extends("plugin:prettier/recommended"));
  }

  if (includeNext) {
    configs.push(nextRules);
  }

  if (reactHooks) {
    configs.push(...compat.extends("plugin:react-hooks/recommended"));
  }

  if (cypressRecommended) {
    configs.push(pluginCypress.configs.recommended);
  }

  if (jsdoc) {
    configs.push(jsdocRules);
  }

  if (includeonlyError) {
    configs.push({ plugins: { "only-error": onlyError } });
  }

  if (includeonlyNoOnlyTests) {
    configs.push({
      plugins: {
        "no-only-tests": noOnlyTests,
      },
      rules: {
        "no-only-tests/no-only-tests": "error",
      },
    });
  }

  if (overrides) {
    configs.push(overrides);
  }

  return fixupConfigRules(config(configs) as FixupConfigArray);
};

export default getConfig;
