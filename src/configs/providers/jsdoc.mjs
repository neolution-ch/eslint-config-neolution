import jsdoc from "eslint-plugin-jsdoc";

const jsdocRules = [
  jsdoc.configs["flat/recommended"],
  {
    rules: {
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
    },
  },
];

export default jsdocRules;
