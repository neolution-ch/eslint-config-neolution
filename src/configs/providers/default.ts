import globals from "globals";
import path from "path";
import { createRequire } from "module";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { createNodeResolver } from "eslint-plugin-import-x";
import { findTsConfigRootDir } from "./typescript.js";

// import-x requires the parser named in `import-x/parsers` by name, which fails when our
// dependencies are not hoisted into the consumer's root node_modules (pnpm, yarn pnp).
// Resolving it to an absolute path here avoids that. It is looked up through
// typescript-eslint rather than directly, so we get the exact parser build that
// typescript-eslint itself uses without declaring a second dependency on it.
const requireHere = createRequire(import.meta.url);
const typescriptParserPath = createRequire(
  requireHere.resolve("typescript-eslint"),
).resolve("@typescript-eslint/parser");

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
      // eslint-plugin-import-x reads its settings from the `import-x/*` namespace, even
      // though we register the plugin itself under the `import` name.
      "import-x/parsers": {
        [typescriptParserPath]: [".ts", ".tsx"],
      },
      // The resolvers are constructed from imported factories instead of being named in
      // the legacy `import-x/resolver` object, for the same reason as the parser above.
      // Names are resolved relative to the consumer's cwd.
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,

          // eslint-import-resolver-typescript defaults to process.cwd() but this is not always correct,
          // for example Visual Studio runs eslint from the folder of the file open in
          // the editor and not the root of the project
          project: [path.join(findTsConfigRootDir() ?? "", "tsconfig.json")],
        }),
        createNodeResolver({
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
      ],
      "import-x/ignore": [
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
