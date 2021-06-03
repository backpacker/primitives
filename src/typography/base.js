import React, { useContext } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import ConfigContext from '../config-context';
import { TextStylePropTypes } from '../prop-types';
import { makeStyle } from '../utils/style';

const Text = (props) => {
  const {
    children,

    // Text props
    testID,
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
    accessibilityState,
    accessible,
    adjustsFontSizeToFit,
    allowFontScaling,
    ellipsizeMode,
    maxFontSizeMultiplier,
    minimumFontScale,
    nativeID,
    numberOfLines,
    onLayout,
    onLongPress,
    onPress,
    onTextLayout,
    selectable,

    // Text style props
    variant,

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

    ...rest
  } = props;

  const { theme } = useContext(ConfigContext);
  const { fontFamily, fontWeights, textVariants, colors } = theme;

  const baseStyle = makeStyle([
    {
      fontFamily,
      color: colors.text,
      textAlign: 'left'
    },
    variant && { ...textVariants[variant] },

    uppercase && { textTransform: 'uppercase' },
    underline && { textDecorationLine: 'underline' },
    strikeout && { textDecorationLine: 'line-through' },
    center && { textAlign: 'center' },

    extralight && { ...fontWeights.extralight },
    thin && { ...fontWeights.thin },
    light && { ...fontWeights.light },
    medium && { ...fontWeights.medium },
    semibold && { ...fontWeights.semibold },
    bold && { ...fontWeights.bold },
    heavy && { ...fontWeights.heavy },
    extraheavy && { ...fontWeights.extraheavy },

    { ...rest }
  ]);

  return (
    <RNText
      style={baseStyle}
      testID={testID}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessible={accessible}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      minimumFontScale={minimumFontScale}
      nativeID={nativeID}
      numberOfLines={numberOfLines}
      onLayout={onLayout}
      onLongPress={onLongPress}
      onPress={onPress}
      onTextLayout={onTextLayout}
      selectable={selectable}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  ...TextStylePropTypes,
  variant: PropTypes.string,
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
  variant: undefined,
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
