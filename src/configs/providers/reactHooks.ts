import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";

// The flat config is used directly instead of going through
// `FlatCompat().extends("plugin:react-hooks/recommended")`, because FlatCompat resolves
// plugin names relative to `process.cwd()`. That breaks for every consumer whose package
// manager does not hoist our dependencies into their root node_modules (pnpm, yarn pnp).
//
// `configs.flat.recommended` carries the same rules as the eslintrc `recommended` config
// that was extended before, `recommended-latest` would additionally enable new rules.
const reactHooksRecommended = reactHooksPlugin.configs.flat.recommended;

// @eslint-react ships its own versions of most react-hooks rules under the same names
// (`@eslint-react/rules-of-hooks`, `@eslint-react/static-components`, ...).
// eslint-plugin-react-hooks is the official implementation, so every @eslint-react rule
// that duplicates an enabled react-hooks rule is disabled to avoid duplicate reports.
const eslintReactPlugins =
  eslintReact.configs["recommended-typescript"].plugins;
const eslintReactRuleNames = new Set(
  Object.keys(eslintReactPlugins?.["@eslint-react"]?.rules ?? {}),
);
const duplicatedEslintReactRules = Object.fromEntries(
  Object.keys(reactHooksRecommended.rules ?? {})
    .map((ruleId) => ruleId.replace(/^react-hooks\//, ""))
    .filter((ruleName) => eslintReactRuleNames.has(ruleName))
    .map((ruleName) => [`@eslint-react/${ruleName}`, "off" as const]),
);

const reactHooksRules: InfiniteDepthConfigWithExtends = [
  {
    name: "react-hooks/recommended",
    ...reactHooksRecommended,
  },
  {
    name: "neolution/react-hooks",
    rules: {
      "react-hooks/rules-of-hooks": "error",
    },
  },
  {
    // The plugin is registered here as well, so this also works when `reactHooks` is
    // enabled without `reactRecommended`.
    name: "neolution/react-hooks/disable-eslint-react-duplicates",
    plugins: eslintReactPlugins,
    rules: duplicatedEslintReactRules,
  },
];

export default reactHooksRules;
