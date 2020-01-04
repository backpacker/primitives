import React from 'react';
import { View } from 'react-native';

import { ConfigConsumer } from '../config-context';
import { makeStyle } from '../utils/style';

const getDimensions = (size) => {
  return {
    width: size,
    height: size
  };
};

const Spacer = (props) => {
  const { fullWidth, isDebug, ...rest } = props;

  return (
    <ConfigConsumer>
      {({ config }) => {
        const { spacer } = config;

        const allSizes = Object.keys(spacer).map((key) => {
          return props[key] && getDimensions(spacer[key]);
        });

        const baseStyle = makeStyle([
          getDimensions(spacer.default),
          fullWidth && { width: '100%' },
          isDebug && { backgroundColor: 'pink' },
          ...allSizes,
          { ...rest }
        ]);

        return <View style={baseStyle} />;
      }}
    </ConfigConsumer>
  );
};

export default Spacer;
