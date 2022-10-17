module.exports = {
  extends: [
    "./rules/eslint",
    "./rules/typescript",
    "./rules/import",
    "./rules/jsdoc",
    "./rules/react",
    "./rules/react-hooks",
    "./rules/next",
  ].map(require.resolve)
};
