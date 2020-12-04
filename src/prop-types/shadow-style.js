/**
 * Shadow Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

/**
 * Defines the PropTypes for Shadow Style
 */
const ShadowStylePropTypes =
  Platform.OS === 'ios'
    ? {
        shadowColor: PropTypes.string,
        shadowOffset: PropTypes.shape({
          width: PropTypes.number,
          height: PropTypes.number
        }),
        shadowOpacity: PropTypes.number,
        shadowRadius: PropTypes.number
      }
    : {};

export default ShadowStylePropTypes;
