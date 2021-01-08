export const fontWeights = {
  extralight: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  extraheavy: '900'
};

export const defaultTheme = {
  // Typography
  fontFamily: undefined, // default for each Platform
  fontWeights,
  textVariants: {
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
      fontWeight: fontWeights.semibold
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
  },

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
  activeTheme: 'default',
  default: defaultTheme,
  dark: darkTheme
};
