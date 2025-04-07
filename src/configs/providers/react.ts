import { config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";

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
    },
  },
);

const reactRulesJsx = config(
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    rules: {
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
      "react/jsx-no-useless-fragment": ["error"],
    },
  },
  {
    languageOptions: {
      ...eslintPluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
);

export { reactRulesJsx, reactRulesRecommended };
