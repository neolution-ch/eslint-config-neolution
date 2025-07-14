import { config, configs } from "typescript-eslint";
import fs from "fs";
import path from "path";

const findTsConfigRootDir = () => {
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

const typescriptRules = config(
  configs.eslintRecommended,
  configs.recommended,
  configs.recommendedTypeChecked.map((rule) => ({
    ...rule,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
  })),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: true,
        parser: "@typescript-eslint/parser",

        // typescript-eslint defaults to process.cwd() but this is not always correct,
        // for example Visual Studio runs eslint from the folder of the file open in
        // the editor and not the root of the project
        tsconfigRootDir: findTsConfigRootDir() ?? process.cwd(),
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
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
);

export default typescriptRules;
