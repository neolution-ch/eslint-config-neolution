import { config } from "typescript-eslint";
import { fixupPluginRules } from "@eslint/compat";
import eslintPluginReact from "eslint-plugin-react";

// eslint-plugin-react still relies on `context.getFilename()` and friends, which
// were removed in ESLint v10. Patching just this plugin keeps it working on both
// ESLint v9 and v10 without touching the other (already modern) plugins.
//
// ESLint v9 and v10 declare `RuleContext` differently, so the plugin only structurally
// matches the `Plugin` type on one of the two majors. Widening to `unknown` first keeps
// the source compiling against either one, a direct assertion would be reported as
// unnecessary on v10 and be missing on v9. The patched rules behave the same on both.
const asEslintPlugin = (plugin: unknown) =>
  plugin as Parameters<typeof fixupPluginRules>[0];

const reactPlugin = fixupPluginRules(asEslintPlugin(eslintPluginReact));

const reactRulesRecommended = config(
  {
    ...eslintPluginReact.configs.flat.recommended,
    plugins: { react: reactPlugin },
  },
  {
    rules: {
      // Prefer arrow functions for components
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/no-unstable-nested-components": [
        "error",
        {
          allowAsProps: false,
        },
      ],
    },
  },
);

const reactRulesJsx = config(
  {
    ...eslintPluginReact.configs.flat["jsx-runtime"],
    plugins: { react: reactPlugin },
  },
  {
    rules: {
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    },
  },
);

export { reactRulesJsx, reactRulesRecommended };
