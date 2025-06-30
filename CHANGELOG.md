# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Adjusted Javascript rule set according the Typescript rule set

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

[unreleased]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.1.0...HEAD
[2.1.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.3.0...2.0.0
[1.3.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/neolution-ch/eslint-config-neolution/compare/5f308ef87fa2a779e56cb6af4510baf6e2deeb23...1.0.0
