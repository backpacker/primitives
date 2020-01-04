import React from 'react';
import { TouchableOpacity } from 'react-native';

import { makeStyle } from '../utils/style';

const Touchable = (props) => {
  const { children, onPress, isDisabled, activeOpacity, ...rest } = props;

  const baseStyle = makeStyle([{ ...rest }]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity || 0.5}
      disabled={isDisabled}
      style={baseStyle}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
