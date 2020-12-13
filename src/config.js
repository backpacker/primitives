export const weights = {
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

const defaultTheme = {
  fontSize: {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 12,
    h7: 10,
    h8: 8
  },
  fontWeight: weights.normal,
  fontFamily: undefined,
  weights,

  spacerUnit: 8,
  defaultSpacerSize: 2,
  spacer: {
    xs: 10,
    s: 14,
    m: 18,
    l: 22,
    xl: 26
  },

  colors: {
    brand: '#28D9AA',
    background: '#FFF',
    text: '#000'
  },

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

export { defaultTheme };

export default {
  activeTheme: 'default',
  default: defaultTheme,
  dark: darkTheme
};
