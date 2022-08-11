module.exports = {
  extends: [
    "plugin:jsdoc/recommended"
  ],

  plugins: [
    "jsdoc"
  ],

  // View link below for jsdoc rules documentation
  // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules
  rules: {
    // Do not enforce the empty line after the description block
    // https://github.com/gajus/eslint-plugin-jsdoc#newline-after-description
    "jsdoc/newline-after-description": "off",

    // Do not require that each @param tag has a type value
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
    "jsdoc/require-param-type": "off",

    // Do not require that @returns tag has a type value
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
    "jsdoc/require-returns-type": "off"
  }
};
