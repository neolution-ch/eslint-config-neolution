import { FlatCompat } from "@eslint/eslintrc";
import { InfiniteDepthConfigWithExtends } from "typescript-eslint";

const compat = new FlatCompat();
const nextRules = [
  ...compat.extends("plugin:@next/next/recommended"),
] as InfiniteDepthConfigWithExtends;

export default nextRules;
