# eslint-config-neolution

This package provides Neolution's eslint.config.js as an extensible shared config.

## Installation

```sh
# inside your project's working tree
yarn add -D @neolution-ch/eslint-config-neolution
```

## Usage

Edit the `eslint.config.mjs` of your project:

```js
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

export default [...neolutionEslintConfig.configs.flat.nextjs];
```

### Configs

| ruleset                                       | nextjs  | cypress | react-library | typescript | javascript |
| --------------------------------------------- | :-----: | :-----: | :-----------: | :--------: | :--------: |
| eslint.configs.recommended                    | &check; | &check; |    &check;    |  &check;   |  &check;   |
| unicorn/recommended                           | &check; | &check; |    &check;    |  &check;   |  &check;   |
| typeScriptEslint.configs.recommended          | &check; | &check; |    &check;    |  &check;   |  &cross;   |
| eslintPluginReact.configs.flat.recommended    | &check; | &check; |    &check;    |  &cross;   |  &cross;   |
| eslintPluginReact.configs.flat["jsx-runtime"] | &check; | &check; |    &check;    |  &cross;   |  &cross;   |
| eslintPluginPrettierRecommended               | &check; | &check; |    &check;    |  &check;   |  &check;   |
| next/next/recommended                         | &check; | &cross; |    &cross;    |  &cross;   |  &cross;   |
| import/typescript                             | &check; | &check; |    &check;    |  &check;   |  &check;   |
| react-hooks                                   | &check; | &cross; |    &check;    |  &cross;   |  &cross;   |
| cypress/recommended                           | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |
| eslint-plugin-no-only-tests                   | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |

## License

[MIT](LICENSE.md)
