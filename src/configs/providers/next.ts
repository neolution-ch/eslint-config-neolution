import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

// The plugin object is imported directly instead of going through
// `FlatCompat().extends("plugin:@next/next/recommended")`, because FlatCompat resolves
// plugin names relative to `process.cwd()`. That breaks for every consumer whose package
// manager does not hoist our dependencies into their root node_modules (pnpm, yarn pnp).
//
// The assertion is needed because the plugin types its own severities as plain `string`.
// The disable is needed because the plugin is CommonJS, so `flatConfig` cannot be
// imported as a named export from ESM even though it is reported as one.
const nextRules: InfiniteDepthConfigWithExtends = [
  // eslint-disable-next-line import/no-named-as-default-member
  nextPlugin.flatConfig.recommended as InfiniteDepthConfigWithExtends,
];

export default nextRules;
