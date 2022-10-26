module.exports = {
  extends: [
    "plugin:import/recommended"
  ],

  plugins: [
    "import",
  ],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  // View link below for import rules documentation
  // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
  rules: {
    // same as airbnb but with ts/tsx extensions
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
};
