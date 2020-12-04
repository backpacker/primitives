import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { TouchableStylePropTypes } from '../prop-types';
import { makeStyle } from '../utils/style';

const Touchable = (props) => {
  const { children, onPress, isDisabled, activeOpacity, ...rest } = props;

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

Touchable.propTypes = {
  ...TouchableStylePropTypes,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  activeOpacity: PropTypes.number
};

Touchable.defaultProps = {
  onPress: () => {},
  isDisabled: false,
  activeOpacity: 0.5
};

export default Touchable;
