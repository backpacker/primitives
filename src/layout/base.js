import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { LayoutStylePropTypes } from '../prop-types';
import { makeStyle } from '../utils/style';

const BaseLayout = (props) => {
  const { children, center, onLayout, testID, ...rest } = props;

  const baseStyle = makeStyle([
    center && {
      justifyContent: 'center',
      alignItems: 'center'
    },
    { ...rest }
  ]);

  return (
    <View style={baseStyle} onLayout={onLayout} testID={testID}>
      {children}
    </View>
  );
};

BaseLayout.propTypes = {
  ...LayoutStylePropTypes,
  center: PropTypes.bool,
  onLayout: PropTypes.func
};

BaseLayout.defaultProps = {
  center: false,
  onLayout: () => {}
};

export default BaseLayout;
