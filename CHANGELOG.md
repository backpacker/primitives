# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Headers are one of: `Added`, `Changed`, `Removed`, `Fixed` or `Breaking`.

## [2.1.0]

### Added

- Type declaration file ([#87](https://github.com/backpacker/primitives/pull/87))

### Changed

- Theme config is now shallow merged. Fixes the case when an existing theme (`default` or `dark`) is changed and old keys are preserved. Removes dependency on `loadash.merge` ([#88](https://github.com/backpacker/primitives/pull/88))

## [2.0.0]

### Breaking ⚠️

- New `Spacer` format, based on a `spacerUnit` (default `8`) set in config. Spacer size is computed using the formula `spacerUnit * size`, with `size` as a Number `prop` ([#77](https://github.com/backpacker/primitives/pull/77))
- New `Text` primitive config format. You can now add any number of `textVariants` in the config and use them via the `variant` `prop` ([#78](https://github.com/backpacker/primitives/pull/78))

### Added

- New `useTheme` hook. Returns current theme ([#77](https://github.com/backpacker/primitives/pull/77))
- `PropTypes` for all primitives ([#60](https://github.com/backpacker/primitives/pull/60))

### Removed

- `H1`, `H2`, ..., `H8` primitives are removed in favor of a new way to config `Text`, based on `textVariants` ([#78](https://github.com/backpacker/primitives/pull/78))

## [1.0.1]

### Changed

- Add `react` and `react-native` as `peerDependencies`

## [1.0.0]

### Added

- `Layout`, `Typography`, `Spacer`, `Touchable` `Expandable` and `Modal` primitives.
