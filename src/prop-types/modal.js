/**
 * Modal Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';
import { Platform, ViewPropTypes } from 'react-native';

/**
 * Defines the PropTypes for Layout Style
 */
export default {
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  transparent: PropTypes.bool,
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onShow: PropTypes.func,

  ...ViewPropTypes,

  /**
   * @platform ios
   */
  ...(Platform.OS === 'ios'
    ? {
        presentationStyle: PropTypes.oneOf([
          'fullScreen',
          'pageSheet',
          'formSheet',
          'overFullScreen'
        ]),
        supportedOrientations: PropTypes.arrayOf(
          PropTypes.oneOf([
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right'
          ])
        ),
        onDismiss: PropTypes.func,
        onOrientationChange: PropTypes.func
      }
    : {}),

  /**
   * @platform android
   */
  ...(Platform.OS === 'android'
    ? {
        hardwareAccelerated: PropTypes.bool,
        statusBarTranslucent: PropTypes.bool
      }
    : {})
};
