// Disable typescript rules
const typescriptOff = Object.keys(require('@typescript-eslint/eslint-plugin').rules)
    .reduce((acc, rule) => { acc[`@typescript-eslint/${rule}`] = 'off'; return acc }, {})

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["@neolution-ch/eslint-config-neolution"],
  parser: "espree", // restore original parser
  rules: {
    ...typescriptOff
  },
};
