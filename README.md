# primitives

[![npm version](https://img.shields.io/npm/v/@backpackerds/primitives)](https://www.npmjs.com/package/@backpackerds/primitives)
[![Coverage Status](https://coveralls.io/repos/github/backpackerds/primitives/badge.svg?branch=master)](https://coveralls.io/github/backpackerds/primitives?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The foundational components for all user interfaces, the `atoms` from the [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/#atoms) methodology.

1. [Install](#Install)
2. [Basic example](#basic-example)
3. [What are primitives](#what-are-primitives)
4. [Primitives](#primitives)

## Install

```bash
yarn add @backpackerds/primitives
```

## Basic example

```js
// src/root.js
// Wrap your app Root with the `ConfigProvider` component
import { ConfigProvider } from '@backpackerds/primitives'

render() {
  <ConfigProvider>
    <App />
  </ConfigProvider>
}

// src/screens/hello.js
// Then use primitives anywhere you want
import { H1, Touchable } from '@backpackerds/primitives';

render() {
  <Touchable onPress={sayHello}>
    <H1 uppercase>Hello!</H1>
  </Touchable>
}
```

## What are primitives

In short, a `primitive` is the most basic UI component in your system. It ensures a consistent foundation for all the other UI layers. In fact, all the other UI layers - `components` and `screens` are built _with_ `primitives`.

As for _why_ building your UI using `primitives` is a good idea, you can read more here - [Anatomy of a UI element](./anatomy-of-a-ui-element.md).

## Primitives
