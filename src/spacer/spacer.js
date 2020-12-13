import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { LayoutStylePropTypes } from '../prop-types';
import { useTheme } from '../config-context';
import { makeStyle } from '../utils/style';

const getDimensions = (size) => {
  return {
    width: size,
    height: size
  };
};

const Spacer = (props) => {
  const { size, fullWidth, fullHeight, ...rest } = props;

  const { spacing } = useTheme();

  const baseStyle = makeStyle([
    getDimensions(spacing(size)),
    fullWidth && { width: '100%' },
    fullHeight && { height: '100%' },
    { ...rest }
  ]);

  return <View style={baseStyle} />;
};

Spacer.propTypes = {
  ...LayoutStylePropTypes,
  size: PropTypes.number,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool
};

Spacer.defaultProps = { size: undefined, fullWidth: false, fullHeight: false };

export default Spacer;
