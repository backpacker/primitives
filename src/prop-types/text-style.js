/**
 * Text Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

import LayoutStylePropTypes from './layout-style';

/**
 * Defines the PropTypes for Text Style
 */
const TextStylePropTypes = {
  ...LayoutStylePropTypes,

  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  fontWeight: PropTypes.oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]),
  letterSpacing: PropTypes.number,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  textDecorationLine: PropTypes.oneOf([
    'none',
    'underline',
    'line-through',
    'underline line-through'
  ]),
  textDecorationStyle: PropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),
  textDecorationColor: PropTypes.string,
  textShadowColor: PropTypes.string,
  textShadowOffset: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  textShadowRadius: PropTypes.number,
  textTransform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase'
  ]),

  /**
   * @platform ios
   */
  ...(Platform.OS === 'ios'
    ? {
        fontVariant: PropTypes.arrayOf(
          PropTypes.oneOf([
            'small-caps',
            'oldstyle-nums',
            'lining-nums',
            'tabular-nums',
            'proportional-nums'
          ])
        ),
        letterSpacing: PropTypes.number,
        textDecorationColor: PropTypes.string,
        textDecorationStyle: PropTypes.oneOf([
          'solid',
          'double',
          'dotted',
          'dashed'
        ]),
        writingDirection: PropTypes.oneOf(['auto', 'ltr', 'rtl'])
      }
    : {}),

  /**
   * @platform android
   */
  ...(Platform.OS === 'android'
    ? {
        textAlignVertical: PropTypes.oneOf(['auto', 'top', 'bottom', 'center']),
        includeFontPadding: PropTypes.bool
      }
    : {})
};

export default TextStylePropTypes;
