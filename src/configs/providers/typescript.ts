import { configs } from "typescript-eslint";
import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import fs from "fs";
import path from "path";

export const findTsConfigRootDir = () => {
  try {
    const findTsConfigRootDirInternal = (
      directory: string,
      filename: string,
    ) => {
      let fileStats: fs.Stats | undefined;
      try {
        fileStats = fs.statSync(path.join(directory, filename));
      } catch {
        // Do nothing
      }

      // If the file exists and is a file, return the directory
      if (fileStats?.isFile()) {
        return directory;
      }

      // Don't continue when already at the fs root
      if (directory === path.resolve("/")) {
        return null;
      }

      // Recursively check the parent directory
      return findTsConfigRootDirInternal(path.dirname(directory), filename);
    };

    return findTsConfigRootDirInternal(process.cwd(), "tsconfig.json");
  } catch {
    return null;
  }
};

/**
 * Builds the TypeScript config.
 * @param strict Use the `strict` / `strictTypeChecked` presets of typescript-eslint instead of
 * `recommended` / `recommendedTypeChecked`. Both strict presets are supersets of their recommended
 * counterparts. Type information is always available, so only the type-checked variant is offered.
 * @returns The TypeScript config.
 */
const getTypescriptRules = (
  strict: boolean,
): InfiniteDepthConfigWithExtends => [
  configs.eslintRecommended,
  strict ? configs.strict : configs.recommended,
  (strict ? configs.strictTypeChecked : configs.recommendedTypeChecked).map(
    (rule) => ({
      ...rule,
      files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
    }),
  ),
  {
    name: "neolution/typescript/parser-options",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: true,

        // typescript-eslint defaults to process.cwd() but this is not always correct,
        // for example Visual Studio runs eslint from the folder of the file open in
        // the editor and not the root of the project
        tsconfigRootDir: findTsConfigRootDir() ?? process.cwd(),
      },
    },
  },
  {
    name: "neolution/typescript/javascript-files",
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    name: "neolution/typescript",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
    rules: {
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/unbound-method": "off",

      // https://github.com/typescript-eslint/typescript-eslint/issues/2621
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];

export const typescriptRules = getTypescriptRules(false);
export const typescriptRulesStrict = getTypescriptRules(true);
