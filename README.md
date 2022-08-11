# eslint-config-neolution

This package provides Neolution's .eslintrc as an extensible shared config.

## Installation

```sh
# inside your project's working tree
yarn add -D @neolution-ch/eslint-config-neolution
```

## Usage

Edit the `.eslintrc.js` of your project:

```json
module.exports = {
  ...
  extends: ["@neolution-ch/eslint-config-neolution"],
  ...
}
```

### React

For React project you might need to adjust the "@typescript-eslint/naming-convention" rule to allow PascalCase for component names.

```json
module.exports = {
  ...
  rules: {
    "@typescript-eslint/naming-convention": ["error", {
      selector: "default",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: ["typeLike", "accessor", "enumMember"],
      format: ["PascalCase"],
    }],
  }
  ...
}
```
