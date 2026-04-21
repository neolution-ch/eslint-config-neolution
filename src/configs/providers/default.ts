import globals from "globals";
import path from "path";
import { findTsConfigRootDir } from "./typescript.js";

const defaults = [
  {
    ignores: [
      "**/orval/",
      "**/.next/",
      "**/nextjs-routes.d.ts",
      "**/dist/",
      "**/coverage/",
    ],
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

          // eslint-import-resolver-typescript defaults to process.cwd() but this is not always correct,
          // for example Visual Studio runs eslint from the folder of the file open in
          // the editor and not the root of the project
          project: [path.join(findTsConfigRootDir() ?? "", "tsconfig.json")],
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
