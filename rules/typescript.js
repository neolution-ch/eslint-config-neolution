module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["@typescript-eslint"],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json",
  },

  // View link below for typescript rules documentation
  // https://typescript-eslint.io/rules/
  rules: {},
};
