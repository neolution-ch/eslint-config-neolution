import collanaEslintConfig from "./dist/index.js";

export default [
  // scripts/ holds the release tooling copied from the release playbook, kept identical to its template.
  { ignores: ["scripts/"] },
  ...collanaEslintConfig.configs.flat.typescript,
];
