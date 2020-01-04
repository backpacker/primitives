import React from 'react';
import { View } from 'react-native';

import { makeStyle } from '../utils/style';

const BaseLayout = (props) => {
  const { children, center, onLayout, ...rest } = props;

  const baseStyle = makeStyle([
    center && {
      justifyContent: 'center',
      alignItems: 'center'
    },
    {...rest}
  ])

  return (
    <View style={baseStyle} onLayout={onLayout}>
      {children}
    </View>
  );
};

export default BaseLayout;
