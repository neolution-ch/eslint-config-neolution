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
];

export default defaults;
