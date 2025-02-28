import { FlatCompat } from "@eslint/eslintrc";
import { InfiniteDepthConfigWithExtends } from "typescript-eslint";

const compat = new FlatCompat();
const nextRules = [
  ...compat.extends("plugin:@next/next/recommended"),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
] as InfiniteDepthConfigWithExtends;

export default nextRules;
