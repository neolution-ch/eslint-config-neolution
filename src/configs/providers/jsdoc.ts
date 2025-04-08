import jsdoc from "eslint-plugin-jsdoc";
import { InfiniteDepthConfigWithExtends } from "typescript-eslint";

const jsdocRules = [
  jsdoc.configs["flat/recommended"],
  {
    rules: {
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-jsdoc": "off",
    },
  },
  {
    ignores: ["**/*.spec.ts"],
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: false,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
          contexts: [
            "ArrowFunctionExpression",
            "FunctionDeclaration",
            "FunctionExpression",
            "MethodDefinition",
            "PropertyDefinition",
            "TSDeclareFunction",
            "TSEnumDeclaration",
            "TSInterfaceDeclaration",
            "TSMethodSignature",
            "TSPropertySignature",
            "TSTypeAliasDeclaration",
          ],
          checkGetters: true,
        },
      ],
    },
  },
] as InfiniteDepthConfigWithExtends;

export default jsdocRules;
