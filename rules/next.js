module.exports = {
  extends: [
    "plugin:@next/next/recommended"
  ],

  plugins: [
    "@next/next",
  ],

  // View link below for next.js rules documentation
  // https://nextjs.org/docs/basic-features/eslint#eslint-plugin
  rules: {
    // Disable because of this bug: https://github.com/vercel/next.js/issues/24421
    // https://nextjs.org/docs/messages/no-img-element
    "@next/next/no-img-element": "off",
  },
};
