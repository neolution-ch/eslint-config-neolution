import globals from "globals";

const defaults = [
  {
    ignores: ["**/orval/", "**/.next/", "**/nextjs-routes.d.ts", "**/dist/"],
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
      "import/ignore": [
        String.raw`\.(scss|less|css)$`, // can't parse unprocessed CSS modules
      ],
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default defaults;
