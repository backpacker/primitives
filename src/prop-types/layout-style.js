/**
 * Layout Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

import FlexStylePropTypes from './flex-style';
import ShadowStylePropTypes from './shadow-style';
import TransformsStylePropTypes from './transforms-style';

/**
 * Defines the PropTypes for Layout Style
 */
export default {
  ...FlexStylePropTypes,
  ...ShadowStylePropTypes,
  ...TransformsStylePropTypes,

  backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomEndRadius: PropTypes.number,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomRightRadius: PropTypes.number,
  borderBottomStartRadius: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderEndColor: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  borderRightColor: PropTypes.string,
  borderRightWidth: PropTypes.number,
  borderStartColor: PropTypes.string,
  borderStyle: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  borderTopColor: PropTypes.string,
  borderTopEndRadius: PropTypes.number,
  borderTopLeftRadius: PropTypes.number,
  borderTopRightRadius: PropTypes.number,
  borderTopStartRadius: PropTypes.number,
  borderTopWidth: PropTypes.number,
  borderWidth: PropTypes.number,
  opacity: PropTypes.number,
  testID: PropTypes.string,

  /**
   * @platform android
   */
  ...(Platform.OS === 'android' ? { elevation: PropTypes.number } : {})
};
