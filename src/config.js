import { merge } from './utils/object';
// eslint-disable-next-line
import customConfig from '../../primitives.config.js'; // TODO: put this on more level deep

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
    smallest: 2,
    small: 4,
    medium: 8,
    default: 12,
    large: 16,
    largest: 20
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
