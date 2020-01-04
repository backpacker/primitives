import { merge } from './utils/object';
// eslint-disable-next-line
// import customConfig from '../../primitives.config.js'; // TODO: put this on more level deep

const customConfig = {};

const config = {
  typography: {
    fontFamily: {
      default: 'Helvetica'
    },
    fontWeight: {
      extralight: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '800',
      black: '900'
    },
    fontSize: {
      h6: 12,
      h5: 14,
      h4: 16,
      h3: 20,
      h2: 24,
      h1: 32
    }
  },

  spacer: {
    smallest: 6,
    small: 10,
    medium: 14,
    default: 18,
    large: 22,
    largest: 26
  },

  scheme: 'default',

  colors: {
    default: {
      brand: '#28D9AA',
      background: '#FFF',
      text: {
        default: '#000'
      }
    },
    dark: {
      brand: '#28D9AA',
      background: '#000',
      text: {
        default: '#FFF'
      }
    }
  }
};

export default merge(config, customConfig);
