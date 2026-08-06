import { config } from "typescript-eslint";
import { fixupPluginRules } from "@eslint/compat";
import eslintPluginReact from "eslint-plugin-react";

// eslint-plugin-react still relies on `context.getFilename()` and friends, which
// were removed in ESLint v10. Patching just this plugin keeps it working on both
// ESLint v9 and v10 without touching the other (already modern) plugins.
const reactPlugin = fixupPluginRules(eslintPluginReact);

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
