import importPlugin from "eslint-plugin-import";

const importRules = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
];

export default importRules;
