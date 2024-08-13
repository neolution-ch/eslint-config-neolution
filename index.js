module.exports = {
  extends: [
    // "./rules/eslint",
    "./rules/prettier",
    "./rules/typescript",
    "./rules/import",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/next",
  ].map(require.resolve),
};
