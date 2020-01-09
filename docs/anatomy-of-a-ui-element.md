# Anatomy of a UI element

1. [How things can get messy](#how-things-can-get-messy)
1. [Building primitives](#building-primitives)
1. [Using primitives](#using-primitives)

Exploring bad (but common) practices, then turning around and building `primitives` by following a set of principles, all with the final objective of laying down the foundation for a **Design System**.

## How things can get messy

I want to build a button.

<img height="200" src="./button_1.jpg">

I ask for the design, take a quick look and I start coding something along these lines:

```js
const Button = (props) => {
  const { label, onPress } = props;

  return (
    <TouchableOpacity style={styles.base} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.green,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.white
  }
});
```

It's all good, the component looks exactly like the designer wanted it (let's suppose the intended background was indeed a shade of **green**) It takes a `label` string and an `onPress` function as `props`, so it can be reused throughout my App. I rename it to `DefaultButton` and put it in `src/components`. By convention, the `components` dir holds reusable UI for my app.

```js
// components/default-button.js
const DefaultButton = (props) => {...}
```

Now I can use it anywhere like this:

```js
import DefaultButton from './components/default-button';

<DefaultButton label='Login' onPress={login} />;
```

On some other screen, I have another button that has a **purple** background color (instead of my _default_ **green**). No big deal, I just change the `DefaultButton` so it accepts passing a `baseStyle` through `props`.

```js
// components/default-button.js
const DefaultButton = (props) => {
  const {
    label,
    onPress,
    /*
      Add a baseStyle prop,
      and append it to TouchableOpacity's style
    */
    baseStyle
  } = props;
  return (
    <TouchableOpacity style={[styles.base, baseStyle]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
```

Now I just have to update the `baseStyle` on that particular screen. If it happens to be used in another place, I should probably move the styling to a `SecondaryButton` component and use that in all places. But it's okay for now.

```js
import DefaultButton from './components/default-button';

<DefaultButton
  label='Edit profile'
  onPress={editProfile}
  baseStyle={{ backgroundColor: colors.purple }}
/>;
```

Another screen, another change: there's a little arrow along the text of the default **green** button.

<img height="200" src="./button_2.jpg">

I go ahead and update the `DefaultButton` component.

```js
// components/default-button.js
const DefaultButton = (props) => {
  const {
    label,
    onPress,
    baseStyle,
    /*
      New prop to render pass the icon source
    */
    rightIcon
  } = props;

  return (
    <TouchableOpacity style={[styles.base, baseStyle]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      { rightIcon && <Image source={rightIcon} /> }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    /*
      Must change the flexDirection to 'row'
    */
    flexDirection: 'row'
    ...
  },
})
```

Now, let's complicate the example so it feels more like a real life situation and less like a proof of concept. I've got some more button layouts:

- _icon_ on the left, _label_ right next to it
- _icon_ on top, _label_ below
- _subtitle_ underneath the _label_
- full-width button with the _subtitle_ right next to the _label_

It becomes really hard to fit all this new logic into my component and keep it readable (and also usable!) at the same time. And as Donald Knuth once said,

> Programs are meant to be read by humans and only incidentally for computers to execute. (The Art of Computer Programming, 1968)

One solution is to split the button into multiple components, one for each button type - `DefaultButton`, `SecondaryButton`, `ColumnButton`, `FullWidthButton`. And that works. But upon a closer look, I can identify a couple of issues with this approach.

1. All the components above share design and functionality (not in terms of code - sadly -, but rather shared as in **common "features"**). If at some point I have to change a part of this shared look or behavior, I get into trouble again.

> To switch from `TouchableOpacity` to `TouchableHighlight`, for example, or change the `activeOpacity` value, I have to go in and change all my components.

2. A colleague of mine has to build another button that kind of looks like the ones we built so far, but not _exactly_ like that. He goes ahead and **builds another component, from scratch**, trying to replicate the shared look and behavior, but also adding the new functionality in.

The point is, as you might see, it can get pretty messy and inefficient. And it's just a button.

Now, the objective is to at least make the simple things _not_ messy. By following the [guiding principles](https://github.com/backpackerds/readme#guiding-principles), a good UI component must be:

- consistent
- composable
- reusable

Keeping the principles on the back of my mind, I'm going to create the foundational components for a **Design System** for my app. Hopefully, when done, making changes like the ones I mentioned above would become trivial.

## Building primitives

What is a primitive? And why do I need it?

In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol. But we're not going to talk about them. The similarity, though, lies in the fact that a `primitive` is an indivisible element that is the building block for all the other elements. The meaning of a `primitive` in our **Design System** world, will be the following:

> A `primitive` is the most basic UI component in the system (an `atom` from [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/#atoms)) that ensures a consistent foundation for all UI layers

In fact, all the other UI layers - `components` and `screens` - are built _with_ `primitives`.

To build a `primitive`, deconstruct to construct.

Take a look at the first button again. It consists of 3 distinct elements: label text (1), background shape (2) and a touchable area (3). To build a set of `primitives` for (1) - the label - I'm starting with a `BaseText`.

```js
// primitives/typography/base.js
import { Text } from 'react-native'

const BaseText = (props) => {
  const {
    children,
    /*
      Add all the props needed for configuring a Text element.
      The defaults for my Design System can be set here.
    */,
    fontFamily = 'Helvetica',
    fontSize,
    fontWeight = '400',
    color = colors.black,
    /*
      Add a couple of 'utility' props, to easily transform my Text when needed
    */
    uppercase,
    underline,
    strikeout,
    ...rest
  } = props

  /*
    Now baseStyle looks like this.
    As a rule, I'm never allowed to pass style objects through props

    This BaseText acts as the "controller" for my all my Text components.
    It decides what can and what cannot be done with a Text component.
  */
  const baseStyle = [{
    fontFamily,
    fontSize,
    fontWeight,
    color,
    uppercase && { textTransform: 'uppercase' },
    underline && { textDecorationLine: 'underline' },
    strikeout && { textDecorationLine: 'line-through' },
    {...rest}
  }]

  return (
    <Text style={baseStyle}>{children}</Text>
  )
};

export default BaseText
```

⚠️ `Rule no.1` I'm never allowed to change the look of the `BaseText` by passing a `style` object as prop. All the changes are "controlled" by the conventions I set in my `Base` component.

⚠️ `Rule no.2` For every `primitive` in my system, I must have a `Base` component. Everything else is built on top of this.

Now that I have the `BaseText`, I should move on and create all the other `Text` components for my App. What I'm going to vary is `fontSize`.

```js
const fontSizes = {
  h6: 12,
  h5: 14,
  h4: 16,
  h3: 20,
  h2: 24,
  h1: 32
};
```

> insert diagram here

For example, I'd build `H3` like this:

```js
// primitives/typography/h3.js
import BaseText from './base.js';

const H3 = (props) => {
  const { children, ...rest } = props;
  /*
    Make sure to pass the ...rest of the props to the BaseText component.
    In this way, I can use the "conventions" I talked about earlier
  */
  return (
    <BaseText fontSize={fontSizes.h3} {...rest}>
      {children}
    </BaseText>
  );
};

export default H3;
```

From this point on, I don't ever have to think about the size of my Texts. I just import one of the headings. If at any point in time I want to change their size range, my whole app will reflect the changes.

⚠️ `Rule no.3` I'm not allowed to use `BaseText` outside its `typography` folder. It's just a base for my primitives, should never be allowed outside.

> To use a Text primitive from `backpackerds`, just `import { H3 } from '@backpackerds/primitives'`

```js
const MyComponent = (props) => {
  return (
    <H3 center underline uppercase>
      Login
    </H3>
  );
};
```

`H3` already "knows" my font family, weight, color. Everything is already set in stone (actually, set in `BaseText`). And I can transform it the way I need, without producing any harm. **Consistent UI, checked**.

Sweet, right?

Same principles apply for the other `primitives` that make up my button.

## Using primitives

- shift in thinking
- thinking of what i want to achieve, not how
