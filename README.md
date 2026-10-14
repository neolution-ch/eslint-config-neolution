# eslint-config-neolution

This package provides Neolution's eslint.config.js as an extensible shared config.

## Installation

```sh
# inside your project's working tree
yarn add -D @neolution-ch/eslint-config-neolution eslint prettier eslint-plugin-prettier typescript@~6.0.0
```

### Requirements

| requirement            | supported versions     |
| ---------------------- | ---------------------- |
| eslint                 | `^9.38.0 \|\| ^10.0.0` |
| typescript             | `>=4.8.4 <6.1.0`       |
| prettier               | `>=3.0.0` (optional)   |
| eslint-plugin-prettier | `^5.5.6` (optional)    |
| node                   | `^22.13.0 \|\| >=24`   |

`prettier` and `eslint-plugin-prettier` are only needed when the prettier rules are enabled, which all built-in configs do. See [Without prettier](#without-prettier).

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
| import-x/recommended (as `import/*`)          | &check; | &check; |    &check;    |  &check;   |  &check;   |
| react-hooks                                   | &check; | &cross; |    &check;    |  &cross;   |  &cross;   |
| cypress/recommended                           | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |
| eslint-plugin-no-only-tests                   | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |

### Without prettier

To use a config without the prettier rules, build it with `getConfig` and disable `prettierRecommended`. `prettier` and `eslint-plugin-prettier` don't need to be installed then:

```js
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

const { getConfig, defaults } = neolutionEslintConfig.configs.flat;

export default getConfig({ ...defaults.nextjs, prettierRecommended: false });
```

## License

[MIT](LICENSE.md)
