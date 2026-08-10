import { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

import defaults from "./providers/default.js";
import esLintRules from "./providers/eslint.js";
import typescriptRules from "./providers/typescript.js";
import {
  unicornRules,
  unicornRulesUnopinionated,
} from "./providers/unicorn.js";
import importRules from "./providers/importPlugin.js";
import nextRules from "./providers/next.js";
import reactHooksRules from "./providers/reactHooks.js";
import { reactRulesJsx, reactRulesRecommended } from "./providers/react.js";
import pluginCypress from "eslint-plugin-cypress";
import { jsdocRules, jsdocRequireRules } from "./providers/jsdoc.js";
import onlyError from "eslint-plugin-only-error";
import noOnlyTests from "eslint-plugin-no-only-tests";
import { ConfigurationType } from "../types/configuration-type.js";
import jestPlugin from "eslint-plugin-jest";

/**
 * The function `getConfig` takes a configuration object and returns a merged ESLint configuration.
 * @param ruleConfig The configuration object that specifies which ESLint rules and plugins to include.
 * @returns A merged ESLint configuration object.
 */
const getConfig = (ruleConfig: ConfigurationType) => {
  const {
    defaults: includeDefaults,
    esLintRecommended,
    typescript,
    unicorn,
    unicornUnopinionated,
    reactRecommended,
    reactJsxRuntime,
    import: includeImport,
    prettierRecommended,
    next: includeNext,
    reactHooks,
    cypressRecommended,
    jsdoc,
    jsdocRequireJsdoc,
    onlyError: includeonlyError,
    noOnlyTests: includeonlyNoOnlyTests,
    jest,
    overrides,
  } = ruleConfig;
  const configs = new Array<InfiniteDepthConfigWithExtends>();

  if (includeDefaults) {
    configs.push(defaults);
  }

  if (esLintRecommended) {
    configs.push(esLintRules);
  }

  if (typescript) {
    configs.push(typescriptRules);
  }

  if (unicorn) {
    configs.push(unicornRules);
  }

  if (unicornUnopinionated) {
    configs.push(unicornRulesUnopinionated);
  }

  if (reactRecommended) {
    configs.push(reactRulesRecommended);
  }

  if (reactJsxRuntime) {
    configs.push(reactRulesJsx);
  }

  if (includeImport) {
    configs.push(importRules);
  }

  if (prettierRecommended) {
    configs.push(prettierRecommendedConfig);
  }

  if (includeNext) {
    configs.push(nextRules);
  }

  if (reactHooks) {
    configs.push(reactHooksRules);
  }

  if (cypressRecommended) {
    configs.push(pluginCypress.configs.recommended);
  }

  if (jsdoc) {
    configs.push(jsdocRules);
  }

  if (jsdocRequireJsdoc) {
    configs.push(jsdocRequireRules);
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

  if (jest) {
    configs.push(jestPlugin.configs["flat/recommended"]);
  }

  if (overrides) {
    configs.push(overrides);
  }

  // The providers are plain (possibly nested) arrays, flattening them is all that is
  // needed here. `extends` is not used anywhere, so no config helper is required.
  // The array is widened first, because TypeScript cannot evaluate `flat` against the
  // recursive `InfiniteDepthConfigWithExtends` type.
  return (configs as unknown[]).flat(
    Number.POSITIVE_INFINITY,
  ) as TSESLint.FlatConfig.ConfigArray;
};

export default getConfig;
