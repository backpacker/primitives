/*
  On Android only 'normal' and 'bold' fontWeight values are supported.

  Having an object for each fontWeight "variant" enables you to overwrite this config
  and add other properties (like fontFamily) if required
*/
export const fontWeights = {
  extralight: {
    fontWeight: '100'
  },
  thin: {
    fontWeight: '200'
  },
  light: {
    fontWeight: '300'
  },
  normal: {
    fontWeight: '400'
  },
  medium: {
    fontWeight: '500'
  },
  semibold: {
    fontWeight: '600'
  },
  bold: {
    fontWeight: '700'
  },
  heavy: {
    fontWeight: '800'
  },
  extraheavy: {
    fontWeight: '900'
  }
};

export const textVariants = {
  largeTitle: {
    fontSize: 34
  },
  title1: {
    fontSize: 28
  },
  title2: {
    fontSize: 22
  },
  title3: {
    fontSize: 20
  },
  headline: {
    fontSize: 17,
    ...fontWeights.semibold
  },
  body: {
    fontSize: 17
  },
  callout: {
    fontSize: 16
  },
  subhead: {
    fontSize: 15
  },
  footnote: {
    fontSize: 13
  },
  caption1: {
    fontSize: 12
  },
  caption2: {
    fontSize: 11
  }
};

export const defaultTheme = {
  // Typography
  fontFamily: undefined, // default for each Platform
  fontWeights,
  textVariants,

  // Spacer
  spacerUnit: 8,
  defaultSpacerSize: 2,

  // Colors
  colors: {
    brand: '#28D9AA',
    background: '#FFF',
    text: '#000'
  },

  // Meta
  isDark: false
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    brand: '#28D9AA',
    background: '#000',
    text: '#FFF'
  },
  isDark: true
};

export default {
  default: defaultTheme,
  dark: darkTheme
};
