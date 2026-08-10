# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Support for ESLint v10 (the config now supports `eslint@^9.38.0 || ^10.0.0`)

### Fixed

- Plugins, resolvers and the TypeScript parser are no longer referenced by name but imported directly. Names were resolved relative to the consuming project's working directory, so linting failed with "ESLint couldn't find the plugin", "invalid interface loaded as resolver" or "Cannot find module '@typescript-eslint/parser'" whenever a package manager did not hoist our dependencies into the consumer's root `node_modules` (pnpm without hoisting, yarn pnp). This affected every preset, including ones that do not use Next.js

### Changed

- Updated `eslint-plugin-unicorn` (v65), `eslint-plugin-jsdoc` (v63) and `eslint-plugin-cypress` (v6) to their latest majors that still support ESLint v9
- Replaced `eslint-plugin-import` with its maintained fork `eslint-plugin-import-x`, which supports ESLint v10. The plugin is registered under the `import` name, so all rule ids stay `import/*` and existing `eslint-disable` comments and rule overrides keep working
- The import plugin settings moved from the `import/*` to the `import-x/*` namespace (`import-x/resolver-next`, `import-x/parsers`, `import-x/ignore`). Projects that override these settings themselves have to rename them, the resolvers additionally moved from `import/resolver` to `import-x/resolver-next`
- `eslint-plugin-react` is patched with `fixupPluginRules` instead of applying `fixupConfigRules` to the whole config, because the latter breaks the other (already ESLint v10 compatible) plugins

### Removed

- Support for node < 22.13, required by `eslint-plugin-jsdoc`
- The deprecated `config()` helper from `typescript-eslint`, the configs are plain arrays now. The resolved config is unchanged, the exported types stay the same
- The `@eslint/eslintrc` dependency, it is no longer needed now that no config is loaded through `FlatCompat`

## [2.6.0] - 2026-10-06

### Changed

- Updated all packages within their ESLint v9 compatible majors, notably `eslint-plugin-unicorn` (v63), `eslint-plugin-jsdoc` (v62) and `@eslint/compat` (v2)
- The config now requires `eslint@^9.38.0` (required by `eslint-plugin-unicorn`) and node `^20.19.0 || ^22.13.0 || >=24` (required by `@eslint/compat` and `eslint-plugin-jsdoc`)
- `@eslint/js` and `globals` are now regular dependencies instead of dev/transitive dependencies, both are imported at runtime
- `prettier` is now declared as a peer dependency, it is required by `eslint-plugin-prettier`
- The rules newly added to the unicorn recommended config (`unicorn/isolated-functions`, `unicorn/no-immediate-mutation`, `unicorn/no-useless-collection-argument`, `unicorn/prefer-response-static-json`) are disabled for now, they will be enabled with the next major release

### Removed

- The unused dev dependencies `tsx` and `@types/eslint-config-prettier`

### Fixed

- Pinned `eslint-plugin-cypress` to `~5.3.0`, because `5.4.0` accidentally includes the breaking changes of v6 and removes the `eslint-plugin-cypress/flat` export this config imports

## [2.5.0] - 2026-06-10

### Added

- Unicorn unopinionated preset

## [2.4.0] - 2026-04-23

### Changed

- Adjusted "import/resolver" project setting with full tsconfig.json path

## [2.3.0] - 2025-12-23

### Changed

- Updated all packages
- Adjusted "react/jsx-no-useless-fragment" to allow expressions

### Removed

- Adjusted the previous more restricted rules "max-lines" and "complexity" to the default-recommended.

## [2.2.0] - 2025-07-15

### Changed

- Adjusted Javascript rule set according the Typescript rule set
- tsconfigRootDir defaults to the tsconfig.json directory searched recusively starting from process.cwd()
- Adjusted "unicorn/no-useless-undefined" to allow undefined arrow functions
- Adjusted "@typescript-eslint/no-unused-vars" to allow unused variables starting with "\_" (TypeScript style: https://typescript-eslint.io/rules/no-unused-vars/#faqs)

## [2.1.0] - 2025-04-10

### Added

- Added `release-it.json` for release management
- Added `jest` ruleset

## [2.0.0] - 2025-03-04

### Changed

- :boom: Migrate to eslint 9 and flat config
- Switch to release-it for release management

## [1.3.0] - 2022-12-13

### Changed

- Disabled "@typescript-eslint/non-nullable-type-assertion-style" rule

## [1.2.0] - 2022-10-27

### Added

- Added typescript to the import/resolver
- Added deprecated React types to the "ban-types" rule
- Added "complexity" rule with a maximum of 20
- Added "max-lines" rule with a maximum of 300 lines

### Changed

- Updated "no-empty-function" rule to not allow any empty function
- Updated "quotes" rule by using the typescript version
- Updated "react/no-unstable-nested-components" rule to allow component creation inside component props

## [1.1.0] - 2022-10-17

### Added

- Added MIT license
- Enable react-hooks rules

## [1.0.0] - 2022-10-06

### Added

- Initial release

[Unreleased]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.6.0...HEAD
[2.6.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.5.0...2.6.0
[2.5.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.4.0...2.5.0
[2.4.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.3.0...2.4.0
[2.3.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.2.0...2.3.0
[2.2.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.3.0...2.0.0
[1.3.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/5f308ef87fa2a779e56cb6af4510baf6e2deeb23...1.0.0
