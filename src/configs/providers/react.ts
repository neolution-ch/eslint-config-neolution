import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";

const reactRulesRecommended = config(
  eslintPluginReact.configs.flat.recommended,
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

const reactRulesJsx = config(eslintPluginReact.configs.flat["jsx-runtime"], {
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-no-useless-fragment": ["error"],
  },
});

export { reactRulesJsx, reactRulesRecommended };
