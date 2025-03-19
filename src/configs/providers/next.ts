import { FlatCompat } from "@eslint/eslintrc";
import { config } from "typescript-eslint";

const compat = new FlatCompat();
const nextRules = config(compat.extends("plugin:@next/next/recommended"));

export default nextRules;
