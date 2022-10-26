module.exports = {
  extends: [
    "eslint-config-airbnb",
  ].map(require.resolve),

  // View link below for eslint rules documentation
  // https://eslint.org/docs/rules/
  rules: {
    // The airbnb config enforce that class methods use "this", but requires changing how you call the method
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "off",

    // The airbnb config disables the complexity, but we want to limit it
    // https://eslint.org/docs/rules/complexity
    complexity: ["error", 20],

    // The airbnb config enforces consistent return, but we got problems with some external libraries, TypeScript enforces this anyway
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "off",

    // The airbnb config forces unix style, but somebody also works on windows
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": "off",

    // The airbnb config limits to 100 ignoring some lines, instad we allow 160 but don't ignore lines
    // https://eslint.org/docs/rules/max-len
    "max-len": ["error", 160, 2, {
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
    }],

    // The airbnb disables the max lines, but we want to limit it
    // https://eslint.org/docs/rules/max-lines
    "max-lines": ["error", {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // The airbnb config disallow await inside of loops, but it cannot always be avoided
    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "off",

    // The airbnb config disallow use of the continue statement, but it's ok to have it
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "off",

    // The airbnb config disallow use of unary operators (++ and --), but it's ok to have them
    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "off",

    // The airbnb config also restrict ForOfStatement, but we want to use it
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. "
                +"Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
};
