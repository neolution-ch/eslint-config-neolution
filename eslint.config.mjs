import neolutionEslintConfig from "./dist/index.js";

export default [
  {
    ignores: ["dist/"],
  },
  ...neolutionEslintConfig.configs.flat.nextjs,
];
