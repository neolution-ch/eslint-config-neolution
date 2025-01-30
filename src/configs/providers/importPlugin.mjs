import importPlugin from "eslint-plugin-import";

const importRules = [
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    settings: {
      "import/ignore": [
        ".(scss|less|css)$", // can't parse unprocessed CSS modules
      ],
    },
  },
];

export default importRules;
