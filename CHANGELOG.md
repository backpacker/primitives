# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Headers are one of: `Added`, `Changed`, `Removed`, `Fixed` or `Breaking`.

## [2.0.0] - unreleased

### Breaking ⚠️

- New `Spacer` format, based on a `spacerUnit` (default `8`) set in config. Spacer size is computed using the formula `spacerUnit * size`, with `size` as a Number `prop` ([gobzila](https://github.com/gobzila) in [#77](https://github.com/backpacker/primitives/pull/77))

### Added

- New `useTheme` hook. Returns current theme ([gobzila](https://github.com/gobzila) in [#77](https://github.com/backpacker/primitives/pull/77))
- `PropTypes` for all primitives ([gobzila](https://github.com/gobzila) in [#60](https://github.com/backpacker/primitives/pull/60))

## [1.0.1]

### Changed

- Add `react` and `react-native` as `peerDependencies`

## [1.0.0]

### Added

- `Layout`, `Typography`, `Spacer`, `Touchable` `Expandable` and `Modal` primitives.
