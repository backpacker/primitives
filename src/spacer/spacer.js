import React, { useContext } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import ConfigContext from '../config-context';
import { makeStyle } from '../utils/style';

const getDimensions = (size) => {
  return {
    width: size,
    height: size
  };
};

const Spacer = (props) => {
  const { size, fullWidth, ...rest } = props;
  const { theme } = useContext(ConfigContext);
  const { spacer } = theme;

  const baseStyle = makeStyle([
    getDimensions(spacer[size]),
    fullWidth && { width: '100%' },
    { ...rest }
  ]);

  return <View style={baseStyle} />;
};

Spacer.propTypes = {
  ...ViewPropTypes,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  fullWidth: PropTypes.bool
};

Spacer.defaultProps = { size: 'm', fullWidth: false };

export default Spacer;
