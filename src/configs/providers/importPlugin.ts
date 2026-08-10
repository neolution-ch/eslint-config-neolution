import type { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import { importX, flatConfigs } from "eslint-plugin-import-x";

// eslint-plugin-import-x is the maintained fork of eslint-plugin-import and, unlike the
// original, it declares support for ESLint v10.
//
// It is deliberately registered under the `import` plugin name instead of its own
// `import-x` name, so every rule id stays `import/*`. That keeps `eslint-disable`
// comments and rule overrides in consuming projects working unchanged.
const importRules: InfiniteDepthConfigWithExtends = [
  {
    name: "neolution/import",
    plugins: { import: importX },
    rules: Object.fromEntries(
      Object.entries(flatConfigs.recommended.rules ?? {}).map(
        ([ruleId, entry]) => [ruleId.replace(/^import-x\//, "import/"), entry],
      ),
    ),
  },
];

export default importRules;
