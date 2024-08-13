module.exports = {
  plugins: ["react-hooks"],
  extends: ["plugin:react-hooks/recommended"].map(require.resolve),

  // View link below for react-hooks rules documentation
  // https://reactjs.org/docs/hooks-rules.html
  rules: {
    "react-hooks/rules-of-hooks": "error",
  },
};
