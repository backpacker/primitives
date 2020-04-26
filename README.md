# primitives

[![npm version](https://img.shields.io/npm/v/@backpackerds/primitives)](https://www.npmjs.com/package/@backpackerds/primitives)
![Build](https://github.com/backpackerds/primitives/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/backpackerds/primitives/badge.svg?branch=master)](https://coveralls.io/github/backpackerds/primitives?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

1. [Install](#Install)
1. [Usage](#usage)
1. [What are primitives](#what-are-primitives)
1. [Philosophy](#philosophy)
1. [How to adopt in your project](#how-to-adopt-in-your project)
1. [Primitives API](#primitives-api)
1. [Contributing](#contributing)
1. [Credits](#credits)

## Install
```bash
yarn add @backpackerds/primitives
```

## Usage
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

## What are primitives
A `primitive` is the most basic UI component in the system (an `atom` from [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/#atoms)) that ensures a consistent foundation for all UI layers.

In fact, all the other UI layers - `components` and `screens` are built _with_ `primitives`.

To change a primitive's appearance (or behavior), you can pass `props` - both style and behavioral `props`. Going with this approach, the style and the "markup" of the UI are merged together. I know that this might not be everyone's cup of tea, but I found that it helps having all the information about that UI in one place: what components are used, how they look, how they behave. It also helps with brevity (you no longer need Stylesheets) and removes style duplication. As you'll see in the following example, I only have to write a style once.

This approach opens a new way of having _built-in_ styles. If I want, I can now merge `justifyContent: center` and `alignItems: center` into a single `prop`, like this:
```js
<Column center />
```

This enables writing styles very DRY, since now this `center` _modifier_ will be available for all my layout `primitives`. I only have to write it once. All `primitives` come with a couple of built-in modifiers, a list that can obviously be extended.

## Philosophy

## How to adopt in your project

## Primitives API

## Contributing

## Credits
