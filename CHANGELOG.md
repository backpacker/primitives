# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Headers are one of: `Added`, `Changed`, `Removed`, `Fixed` or `Breaking`.

## [3.0.2]

### Fixed

- `ansi-regex` vulnerability by upgrading to `@testing-library/jest-native v4.0.4` ([#134](https://github.com/backpacker/primitives/pull/134))

## [3.0.1]

### Fixed

- Fixed publish workflow which was wrongly introducing react, react-native and metro-react-native-babel-preset dependencies ([#121](https://github.com/backpacker/primitives/pull/121))

## [3.0.0]

### Breaking ⚠️

- `ConfigProvider`'s `config` prop no longer contains the `activeTheme` key. It now only has keys corresponding to theme names - hence becoming a "theme config" only. This separates concerns better, with better typing as a bonus ([#117](https://github.com/backpacker/primitives/pull/117))
- A new prop `defaultTheme: string` specifies the default theme on `ConfigProvider`.
- In general, the `ConfigProvider`'s interface is now:

  ```js
  interface ConfigContextTypes {
    config: ConfigType;
    defaultTheme?: string;
  }
  ```

- `ConfigConsumer` is no longer exported; the only way to consume the config is either via `useTheme` hook or the `withTheme` HOC

## [2.2.0]

### Added

- [Missing props](https://reactnative.dev/docs/text#props) on the `Text` primitive ([#107](https://github.com/backpacker/primitives/pull/107))
- Documentation for custom props on primitives ([#107](https://github.com/backpacker/primitives/pull/107))

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
