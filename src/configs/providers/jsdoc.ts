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
] as InfiniteDepthConfigWithExtends;

export default jsdocRules;
