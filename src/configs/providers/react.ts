import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";

// @eslint-react replaces eslint-plugin-react, which is no longer maintained and does not
// support ESLint v10. Its rules are named `@eslint-react/*` instead of `react/*`.
//
// eslint-plugin-react's `function-component-definition` and `jsx-filename-extension`
// have no equivalent in @eslint-react and are dropped. JSX in `.ts` files is already
// rejected by TypeScript itself.
const reactRulesRecommended: InfiniteDepthConfigWithExtends = [
  eslintReact.configs["recommended-typescript"],
];

// The JSX runtime needs no config of its own anymore: @eslint-react has no rule that
// requires `React` to be in scope for JSX.
const reactRulesJsx: InfiniteDepthConfigWithExtends = [
  {
    name: "neolution/react/jsx",
    plugins: eslintReact.configs["recommended-typescript"].plugins,
    rules: {
      "@eslint-react/jsx-no-useless-fragment": [
        "error",
        { allowExpressions: true },
      ],
    },
  },
];

export { reactRulesJsx, reactRulesRecommended };
