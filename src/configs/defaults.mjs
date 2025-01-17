const defaults = [
  {
    ignores: ["**/orval/"],
  },
  {
    settings: {
      react: {
        version: "17",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json"],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    ignores: ["**/nextjs-routes.d.ts"],
  },
  {
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/pages/**/*.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
  },
  {
    files: ["**/components/**/*.tsx"],
    rules: {
      "unicorn/filename-case": ["error", { case: "pascalCase" }],
    },
  },
];

export default defaults;
