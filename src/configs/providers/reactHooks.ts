import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import reactHooksPlugin from "eslint-plugin-react-hooks";

// The flat config is used directly instead of going through
// `FlatCompat().extends("plugin:react-hooks/recommended")`, because FlatCompat resolves
// plugin names relative to `process.cwd()`. That breaks for every consumer whose package
// manager does not hoist our dependencies into their root node_modules (pnpm, yarn pnp).
//
// `configs.flat.recommended` carries the same rules as the eslintrc `recommended` config
// that was extended before, `recommended-latest` would additionally enable new rules.
const reactHooksRules: InfiniteDepthConfigWithExtends = [
  reactHooksPlugin.configs.flat.recommended,
  {
    rules: {
      "react-hooks/rules-of-hooks": "error",
    },
  },
];

export default reactHooksRules;
