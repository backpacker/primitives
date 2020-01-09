import React from 'react';
import { TouchableOpacity } from 'react-native';

import { makeStyle } from '../utils/style';

const Touchable = (props) => {
  const { children, onPress, isDisabled, activeOpacity = 0.5, ...rest } = props;

  const baseStyle = makeStyle([{ ...rest }]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={isDisabled}
      style={baseStyle}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
