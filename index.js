module.exports = {
  extends: [
    "./rules/eslint",
    "./rules/typescript",
    "./rules/import",
    "./rules/jsdoc",
    "./rules/react",
    "./rules/next",
  ].map(require.resolve)
};
