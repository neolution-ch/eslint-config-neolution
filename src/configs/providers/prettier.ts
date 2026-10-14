import { createRequire } from "module";
import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";

// prettier and eslint-plugin-prettier are optional peer dependencies, because not every
// project wants formatting enforced through ESLint. They are only loaded when the
// prettier rules are actually enabled, so projects that turn them off do not need them.
const requireHere = createRequire(import.meta.url);

const prettierPackages = ["prettier", "eslint-plugin-prettier"];

/**
 * Loads the recommended config of eslint-plugin-prettier.
 * @returns The recommended config of eslint-plugin-prettier.
 * @throws {Error} When prettier or eslint-plugin-prettier is not installed. Without this check,
 * ESLint does not fail but hangs while running the `prettier/prettier` rule.
 */
const loadPrettierRules = (): InfiniteDepthConfigWithExtends => {
  const missingPackages = prettierPackages.filter((packageName) => {
    try {
      requireHere.resolve(packageName);
      return false;
    } catch {
      return true;
    }
  });

  if (missingPackages.length > 0) {
    throw new Error(
      `@neolution-ch/eslint-config-neolution: the prettier rules require ${prettierPackages.join(" and ")} to be installed (missing: ${missingPackages.join(", ")}). Install them, or disable the rules with getConfig({ ...defaults, prettierRecommended: false }).`,
    );
  }

  return requireHere(
    "eslint-plugin-prettier/recommended",
  ) as InfiniteDepthConfigWithExtends;
};

export default loadPrettierRules;
