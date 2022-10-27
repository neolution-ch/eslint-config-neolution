module.exports = {
  // View link below for react rules documentation
  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    // The airbnb config forces the destructuring, but it's not always desirable
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",

    // The airbnb config forces function-expressions, but we prefer arrow-functions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    "react/function-component-definition": ["error", {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    }],

    // The airbnb config forces only .jsx, but we support also .tsx
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

    // The airbnb config forces one expression per line, but it's not always desirable
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": "off",

    // The airbnb config didn't allow component creation inside component props, but we want to allow it
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

    // The airbnb config forces a defaultProps definition for every prop, but we don't want it
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    "react/require-default-props": "off",
  },
};
