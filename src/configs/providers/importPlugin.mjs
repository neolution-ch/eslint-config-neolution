import importPlugin from "eslint-plugin-import";

const importRules = [
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      "import/no-unresolved": [2, { ignore: [String.raw`\.(scss|less|css)$`] }],
    },
  },
];

export default importRules;
