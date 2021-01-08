# primitives

> Foundational components for React Native UI

[![npm version](https://img.shields.io/npm/v/@backpacker/primitives)](https://www.npmjs.com/package/@backpacker/primitives)
[![Build](https://github.com/backpacker/primitives/workflows/tests/badge.svg)](https://github.com/backpacker/primitives/actions?query=workflow%3Atests)
[![Coverage Status](https://coveralls.io/repos/github/backpacker/primitives/badge.svg?branch=master)](https://coveralls.io/github/backpacker/primitives?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

1. [Install](#Install)
1. [Usage](#usage)
1. [What are primitives](#what-are-primitives)
1. [How to adopt in your project](#how-to-adopt-in-your-project)
1. [Primitives API](#primitives-api)
   1. [Layout](#layout)
   1. [Text](#text)
   1. [Spacer](#spacer)
   1. [Touchable](#touchable)
   1. [Expandable](#expandable)
   1. [Modal](#modal)
1. [Custom themes](#custom-themes)
1. [Contributing](#contributing)

## Install

```bash
yarn add @backpacker/primitives
```

## Usage

```js
/*
  Wrap your app Root with the `ConfigProvider` component
*/

// root.js
import { ConfigProvider } from '@backpacker/primitives';

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
import { Row, H1, H3, Spacer, Touchable } from '@backpacker/primitives';

const MyComponent = (props) => {
  const sayHello = () => console.log('Hi! 👋');

  return (
    <Touchable onPress={sayHello}>
      <Row>
        <H1 uppercase>Hello!</H1>
        <Spacer size={3} />
        <H3>Tap here</H3>
      </Row>
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

## How to adopt in your project

Even if you don't use this package, you can still use the principles to build a custom set of `primitives` for your project and use this way of thinking about your UI.

The benefits are:

- UI consistency
- development speed (`primitive` reuse is much easier than `component` reuse)
- write-it-once approach (never have to duplicate styles - they will be built in the `primitives` themselves most of the time)

From my experience, a good practice is to create a new directory called `primitives` and start building the project's own primitives there. Some of them might be imported directly from this library, others might not.

```
├── src
│   ├── screens
│   ├── components
│   ├── primitives
│   │   ├── ...
│   │   ├── layout
│   │   ├── text
│   │   ├── spacer
│   │   └── ...
```

The important part is to keep a clear separation between `primitives`, `components` and `screens`. This is a discipline that helps on the long run. You might end up with `components` inside your `primitives` directory. That's fine, but as soon as you realize that, your job is to move them out of the directory and set them where they belong.

## Primitives API

### Layout

```js
import { Column, Row, Float } from '@backpacker/primitives';

<Column>
  <Row center></Row>
  <Float></Float>
</Column>;
```

`Float` has `position: 'absolute'` and `zIndex: 1`. The others are self-explanatory. The _modifier_ props are:

| prop     | type | description                                      |
| -------- | ---- | ------------------------------------------------ |
| `center` | bool | `justifyContent: 'center', alignItems: 'center'` |
| ∞        | -    | Any other `View` style props                     |

### Text

```js
import { Text } from '@backpacker/primitives';

<Text variant='title1' uppercase semibold>
  Sample Text
</Text>;
```

To configure the `Text` `primitive`, you need to change the following keys in the config file:

- `fontFamily` - `string`, default `undefined` (default for each Platform)
- `textVariants` - `object`, default config [here](./src/config).

You can have any number of `textVariants`, statically defined in the config. By default, the library implements the default typography styles from [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/).

Built-in _modifiers_:

| prop        | type | description                                                                                                                |
| ----------- | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| `uppercase` | bool | `textTransform: 'uppercase'`                                                                                               |
| `underline` | bool | `textDecorationLine: 'underline'`                                                                                          |
| `strikeout` | bool | `textDecorationLine: 'line-through'`                                                                                       |
| `center`    | bool | `textAlign: 'center'`                                                                                                      |
| `semibold`  | bool | `fontWeight: weights.semibold`; Same for all the other font weights. All of them can be found in [config](./src/config.js) |
| ∞           | -    | Any other `Text` style props                                                                                               |

### Spacer

```js
import { Spacer } from '@backpacker/primitives';

<Spacer size={2} />;
```

The `Spacer` is just a `View` with equal `height` and `width` by default. The `height` and the `width` values are computed (multiplication) based on the `size` prop and the `spacerUnit` value which is provided through the [config](./src/config.js) object, via a theme.
A good UI can be expressed with a controlled set of "spacer" values - this gives consistency.

| prop         | type   | description                                                                                                |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------- |
| `size`       | number | Default is the value of `defaultSpacerSize` propery, provided through the [config](./src/config.js) object |
| `fullWidth`  | bool   | If true, the width of the spacer will be `100%`. Default is `false`                                        |
| `fullHeight` | bool   | If true, the height of the spacer will be `100%`. Default is `false`                                       |
| ∞            | -      | Any other `View` style props                                                                               |

### Touchable

```js
import { Touchable } from '@backpacker/primitives';

<Touchable onPress={() => console.log('Hi!')}>...</Touchable>;
```

The `Touchable` primitive is a wrapper around the `TouchableOpacity` component.

| prop            | type     | description                                                                                                                                 |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeOpacity` | number   | Default is `0.5`, but can be changed via this props. This ensures that we have a single source of truth for the `Touchable` `activeOpacity` |
| `onPress`       | function | A func, default is `undefined`                                                                                                              |
| `isDisabled`    | bool     | A bool, default is `false`                                                                                                                  |
| ∞               | -        | Any other `TouchableOpacity` style props                                                                                                    |

### Expandable

```js
import { Expandable } from '@backpacker/primitives';

<Expandable
  renderHeader={({ isVisible }) => (
    <Row>
      <H1>Expand me!</H1>
    </Row>
  )}>
  ...
</Expandable>;
```

The `Expandable` primitive uses `LayoutAnimation` for a smooth expand/collapse of the content.

| prop                    | type     | description                                                                    |
| ----------------------- | -------- | ------------------------------------------------------------------------------ |
| `initialState`          | bool     | A bool, default is `false`                                                     |
| `renderHeader`          | function | A render func, default is `undefined`                                          |
| `onShow`                | function | A func, default is noop                                                        |
| `onHide`                | function | A func, default is noop                                                        |
| `layoutAnimationPreset` | object   | A `LayoutAnimation` preset; default is `LayoutAnimation.Presets.easeInEaseOut` |

### Modal

```js
import { Modal } from '@backpacker/primitives';

const modalRef = useRef(null);

<Modal ref={modalRef}>...</Modal>;

// Then it can be shown
modalRef.current.show();
// or hidden
modalRef.current.hide();
```

The `Modal` primitive is a wrapper for the default RN `Modal`.

| prop            | type     | description             |
| --------------- | -------- | ----------------------- |
| `animationType` | string   | Default is `fade`       |
| `onShow`        | function | A func, default is noop |
| `onHide`        | function | A func, default is noop |

## Custom themes

To create a custom theme, we take the [config](./src/config.js) object and extend it using a new key (or overwrite an existing key). For example, let's say I want to add a new dark theme. I'll call it `dark2`. And I want to change the spacer values too.

```js
import { defaultTheme } from '@backpacker/primitives';

const dark2 = {
  ...defaultTheme,
  spacer: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 25
  },
  colors: {
    ...defaultTheme.colors,
    background: '#000',
    text: '#FFF'
  },
  isDark: true
};
```

Then, I can pass it to the `ConfigProvider`, in `root.js`:

```js
// root.js
import { ConfigProvider } from '@backpacker/primitives';

const customConfig = {
  dark2
};

const Root = () => {
  return (
    <ConfigProvider config={customConfig}>
      <App />
    </ConfigProvider>
  );
};
```

You'll always want to change the `spacer` or `fontSize` values from the default theme anyway.

## Contributing

Before contributing to this repo, please open an issue to discuss the changes and the proposed solution. Communication is key.

Here are a couple of principles any new `primitive` added to the repo should follow:

- A `primitive` should contain as little UI decisions as possible, to have them easily adopted in various projects
- Any change must have unit tests to support it
- Try to keep a consistent API across the board
