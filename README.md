# eslint-config-neolution

This package provides Neolution's eslint.config.js as an extensible shared config.

## Installation

```sh
# inside your project's working tree
yarn add -D @neolution-ch/eslint-config-neolution eslint prettier eslint-plugin-prettier typescript@~6.0.0
```

### Requirements

| requirement            | supported versions        |
| ---------------------- | ------------------------- |
| eslint                 | `^10.4.0`                 |
| typescript             | `>=4.8.4 <6.1.0`          |
| prettier               | `>=3.0.0` (optional)      |
| eslint-plugin-prettier | `^5.5.7` (optional)       |
| node                   | `^22.22.2 \|\| >=24.15.0` |

`prettier` and `eslint-plugin-prettier` are only needed when the prettier rules are enabled, which all built-in configs do. See [Without prettier](#without-prettier).

## Usage

Edit the `eslint.config.mjs` of your project:

```js
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

export default [...neolutionEslintConfig.configs.flat.nextjs];
```

### Configs

| ruleset                              | nextjs  | cypress | react-library | typescript | javascript |
| ------------------------------------ | :-----: | :-----: | :-----------: | :--------: | :--------: |
| eslint.configs.recommended           | &check; | &check; |    &check;    |  &check;   |  &check;   |
| unicorn/recommended                  | &check; | &check; |    &check;    |  &check;   |  &check;   |
| typeScriptEslint.configs.recommended | &check; | &check; |    &check;    |  &check;   |  &cross;   |
| @eslint-react/recommended-typescript | &check; | &check; |    &check;    |  &cross;   |  &cross;   |
| eslintPluginPrettierRecommended      | &check; | &check; |    &check;    |  &check;   |  &check;   |
| next/next/recommended                | &check; | &cross; |    &cross;    |  &cross;   |  &cross;   |
| import-x/recommended (as `import/*`) | &check; | &check; |    &check;    |  &check;   |  &check;   |
| react-hooks                          | &check; | &cross; |    &check;    |  &cross;   |  &cross;   |
| cypress/recommended                  | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |
| eslint-plugin-no-only-tests          | &cross; | &check; |    &cross;    |  &cross;   |  &cross;   |

### Without prettier

To use a config without the prettier rules, build it with `getConfig` and disable `prettierRecommended`. `prettier` and `eslint-plugin-prettier` don't need to be installed then:

```js
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

const { getConfig, defaults } = neolutionEslintConfig.configs.flat;

export default getConfig({ ...defaults.nextjs, prettierRecommended: false });
```

## Upgrading from 3.x

- ESLint v9 is no longer supported, the config requires `eslint@^10.4.0` and node `^22.22.2 || >=24.15.0`.
- `eslint-plugin-react` was replaced with [`@eslint-react`](https://eslint-react.xyz). Rule ids change from `react/*` to `@eslint-react/*`, so `eslint-disable` comments and rule overrides for `react/*` rules have to be renamed or removed. `react/function-component-definition` and `react/jsx-filename-extension` have no equivalent and are gone.
- `eslint-plugin-unicorn` was updated from v65 to v78, its recommended config enables many new rules. `unicorn/prevent-abbreviations` was renamed to `unicorn/name-replacements`.

## License

[MIT](LICENSE.md)
