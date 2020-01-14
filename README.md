# primitives

[![npm version](https://img.shields.io/npm/v/@backpackerds/primitives)](https://www.npmjs.com/package/@backpackerds/primitives)
![Build](https://github.com/backpackerds/primitives/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/backpackerds/primitives/badge.svg?branch=master)](https://coveralls.io/github/backpackerds/primitives?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

1. [Install](#Install)
1. [What are primitives](#what-are-primitives)
1. [Create a design system](#create-a-design-system)
1. [Basic usage](#basic-usage)
1. [Primitives](#primitives)

## Install

```bash
yarn add @backpackerds/primitives
```

## What are primitives

> A `primitive` is the most basic UI component in the system (an `atom` from [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/#atoms)) that ensures a consistent foundation for all UI layers.

In fact, all the other UI layers - `components` and `screens` are built _with_ `primitives`.

> insert diagram here

As for _why_ building your UI using `primitives` is a good idea, you can explore the docs further more 👉 [Anatomy of a UI element](./docs/anatomy-of-a-ui-element.md).

## Create a design system

- UI architecture
- design tokens
- UI consistency

## Basic usage

```js
/*
  Wrap your app Root with the `ConfigProvider` component
*/

// root.js
import { ConfigProvider } from '@backpackerds/primitives';

const Root = () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

/*
  Then use primitives anywhere you want
*/

// screens/hello.js
import { H1, Touchable } from '@backpackerds/primitives';

const MyComponent = (props) => {
  const sayHello = () => console.log('Hi! 👋');
  return (
    <Touchable onPress={sayHello}>
      <H1 uppercase>Hello!</H1>
    </Touchable>
  );
};
```

## Primitives
