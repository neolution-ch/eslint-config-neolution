import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();
const nextRules = [
  ...compat.extends("plugin:@next/next/recommended"),
  { "@next/next/no-img-element": "off" },
];

export default nextRules;
