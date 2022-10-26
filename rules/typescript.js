module.exports = {
  extends: [
    "plugin:@typescript-eslint/all"
  ],

  plugins: [
    "@typescript-eslint"
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json"
  },

  // View link below for typescript rules documentation
  // https://typescript-eslint.io/rules/
  rules: {
    // Disallow certain types
    // https://typescript-eslint.io/rules/ban-types/
    "@typescript-eslint/ban-types": ["error",{
      types: {
        "React.StatelessComponent": { message: "Deprecated: Do not use.", fixWith: "React.ReactElement" },
        StatelessComponent: { message: "Deprecated: Do not use.", fixWith: "ReactElement" },
        "React.FC": { message: "Please use ReactElement + PropsWithChildren", fixWith: "ReactElement" },
        FC: { message: "Please use ReactElement + PropsWithChildren", fixWith: "ReactElement" },
      },
      extendDefaults: true,
    }],

    // Enforce one true brace style (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/brace-style
    "@typescript-eslint/brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // Require trailing commas in multiline object literals (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/comma-dangle
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

    // Enforce spacing before and after comma (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/comma-spacing
    "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],

    // Encourages use of dot notation whenever possible (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/dot-notation
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

    // This option sets a specific tab width for your code (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/indent
    "@typescript-eslint/indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXFragment",
        "JSXOpeningFragment",
        "JSXClosingFragment",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild"
      ],
      ignoreComments: false
    }],

    // Enforce or disallow variable initializations at definition (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/init-declarations
    "@typescript-eslint/init-declarations": "off",

    // Require a space before & after certain keywords (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/keyword-spacing
    "@typescript-eslint/keyword-spacing": ["error", {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // Require or disallow an empty line between class members (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/lines-between-class-members
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],

    // Force camelCase except for some cases
    // https://typescript-eslint.io/rules/naming-convention
    "@typescript-eslint/naming-convention": ["error", {
      selector: "default",
      format: ["camelCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: ["typeLike", "accessor", "enumMember"],
      format: ["PascalCase"],
    }],

    // Disallow empty functions
    // https://typescript-eslint.io/rules/no-empty-function
    "@typescript-eslint/no-empty-function": ["error", {
      allow: [],
    }],

    // Disallow unnecessary parentheses (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/no-extra-parens
    "@typescript-eslint/no-extra-parens": ["off", "all", {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: "all", // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // Disallow classes used as namespaces
    // https://typescript-eslint.io/rules/no-extraneous-class
    "@typescript-eslint/no-extraneous-class": "off",

    // Disallow void type outside of generic or return types
    // https://typescript-eslint.io/rules/no-invalid-void-type
    "@typescript-eslint/no-invalid-void-type": "off",

    // Disallow magic numbers (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/no-magic-numbers
    "@typescript-eslint/no-magic-numbers": ["off", {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // Disallow custom TypeScript modules and namespaces
    // https://typescript-eslint.io/rules/no-namespace
    "@typescript-eslint/no-namespace": ["error", {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    }],

    // Disallow type aliases
    // https://typescript-eslint.io/rules/no-type-alias
    "@typescript-eslint/no-type-alias": "off",

    // Disallow declaration of variables that are not used in the code (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/no-unused-vars
    "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],

    // Require padding inside curly braces (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/object-curly-spacing
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    // Require or disallow padding lines between statements (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/padding-line-between-statements
    "@typescript-eslint/padding-line-between-statements": "off",

    // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
    // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
    "@typescript-eslint/prefer-readonly-parameter-types": "off",

    // Enforce the consistent use of double quotes, but allow single quotes so long as the
    // string contains a quote that would have to be escaped otherwise
    // https://typescript-eslint.io/rules/quotes
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

    // Require `await` in `async function` (note: this is a horrible rule that should never be used) (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/require-await
    "@typescript-eslint/require-await": "off",

    // Enforce template literal expressions to be of string type, but allow numbers and booleans
    // https://typescript-eslint.io/rules/restrict-template-expressions
    "@typescript-eslint/restrict-template-expressions": ["error", {
      allowNumber: true,
      allowBoolean: true,
      allowAny: false,
      allowNullish: false,
      allowRegExp: false,
    }],

    // Require or disallow space before function opening parenthesis (same as eslint-config-airbnb-base)
    // https://typescript-eslint.io/rules/space-before-function-paren
    "@typescript-eslint/space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
  },
};
