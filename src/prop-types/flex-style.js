/**
 * Flex Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

/**
 * Defines the PropTypes for Flex Style
 */
const FlexStylePropTypes = {
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'space-between',
    'space-around'
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ]),
  aspectRatio: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  borderEndWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderLeftWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  borderStartWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderTopWidth: PropTypes.number,
  borderWidth: PropTypes.number,
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  display: PropTypes.oneOf(['none', 'flex']),
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flex: PropTypes.number,
  flexBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse'
  ]),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginEnd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginHorizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginVertical: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll']),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingEnd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingVertical: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.oneOf(['absolute', 'relative']),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zIndex: PropTypes.number,

  /**
   * @platform ios
   */
  ...(Platform.OS === 'ios'
    ? { direction: PropTypes.oneOf(['inherit', 'ltr', 'rtl']) }
    : {})
};

export default FlexStylePropTypes;
