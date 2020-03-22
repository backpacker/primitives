const weights = {
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
  fontSize: [32, 24, 20, 16, 14, 12, 10, 8],
  fontWeight: 'normal',
  fontFamily: undefined,
  weights,
  spacer: [10, 14, 16, 18, 20, 25],
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

export default {
  activeTheme: 'default',
  default: defaultTheme,
  dark: darkTheme
};
