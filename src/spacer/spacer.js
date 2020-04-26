import React, { useContext } from 'react';
import { View } from 'react-native';

import ConfigContext from '../config-context';
import { makeStyle } from '../utils/style';

const getDimensions = (size) => {
  return {
    width: size,
    height: size
  };
};

const Spacer = (props) => {
  const { size = 'm', fullWidth, ...rest } = props;
  const { theme } = useContext(ConfigContext);
  const { spacer } = theme;

  const baseStyle = makeStyle([
    getDimensions(spacer[size]),
    fullWidth && { width: '100%' },
    { ...rest }
  ]);

  return <View style={baseStyle} />;
};

export default Spacer;
