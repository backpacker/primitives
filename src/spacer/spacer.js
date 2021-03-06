import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { LayoutStylePropTypes } from '../prop-types';
import { useTheme } from '../config-context';
import { makeStyle } from '../utils/style';

const getDimensions = (size) => ({
  width: size,
  height: size
});

const Spacer = (props) => {
  const { size, fullWidth, fullHeight, testID, ...rest } = props;

  const { theme } = useTheme();
  const { spacing } = theme;

  const baseStyle = makeStyle([
    getDimensions(spacing(size)),
    fullWidth && { width: '100%' },
    fullHeight && { height: '100%' },
    { ...rest }
  ]);

  return <View style={baseStyle} testID={testID} />;
};

Spacer.propTypes = {
  ...LayoutStylePropTypes,
  size: PropTypes.number,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  testID: PropTypes.string
};

Spacer.defaultProps = {
  size: undefined,
  fullWidth: false,
  fullHeight: false,
  testID: undefined
};

export default Spacer;
