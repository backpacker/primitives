import React, { useContext } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import ConfigContext from '../config-context';
import { TextStylePropTypes } from '../prop-types';
import { makeStyle } from '../utils/style';

const Text = (props) => {
  const {
    children,

    uppercase,
    underline,
    strikeout,

    extralight,
    thin,
    light,
    medium,
    semibold,
    bold,
    heavy,
    extraheavy,

    center,

    testID,
    ...rest
  } = props;

  const { theme } = useContext(ConfigContext);
  const { fontFamily, colors, weights } = theme;

  const baseStyle = makeStyle([
    {
      fontFamily,
      color: colors.text,
      textAlign: 'left'
    },
    uppercase && { textTransform: 'uppercase' },
    underline && { textDecorationLine: 'underline' },
    strikeout && { textDecorationLine: 'line-through' },
    center && { textAlign: 'center' },

    extralight && { fontWeight: weights.extralight },
    thin && { fontWeight: weights.thin },
    light && { fontWeight: weights.light },
    medium && { fontWeight: weights.medium },
    semibold && { fontWeight: weights.semibold },
    bold && { fontWeight: weights.bold },
    heavy && { fontWeight: weights.heavy },
    extraheavy && { fontWeight: weights.extraheavy },

    { ...rest }
  ]);

  return (
    <RNText style={baseStyle} testID={testID}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  ...TextStylePropTypes,
  center: PropTypes.bool,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool,
  strikeout: PropTypes.bool,
  extralight: PropTypes.bool,
  thin: PropTypes.bool,
  light: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  extraheavy: PropTypes.bool
};

Text.defaultProps = {
  center: false,
  uppercase: false,
  underline: false,
  strikeout: false,
  extralight: false,
  thin: false,
  light: false,
  medium: false,
  semibold: false,
  bold: false,
  heavy: false,
  extraheavy: false
};

export default Text;
