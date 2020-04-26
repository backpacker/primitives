import React, { useState, useEffect } from 'react';
import { UIManager, LayoutAnimation } from 'react-native';

import { Touchable } from '../touchable';
import { isIOS } from '../utils/platform';
import { noop } from '../utils/func';

const Expandable = ({
  children,
  initialState = false,
  renderHeader = noop,
  onShow = noop,
  onHide = noop,
  layoutAnimationPreset = LayoutAnimation.Presets.easeInEaseOut
}) => {
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    if (!isIOS) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggle = () => {
    const cb = isVisible ? onHide : onShow;
    LayoutAnimation.configureNext(layoutAnimationPreset);
    setIsVisible(!isVisible);
    cb();
  };

  return (
    <>
      <Touchable onPress={toggle}>{renderHeader({ isVisible })}</Touchable>
      {isVisible ? children : null}
    </>
  );
};

export default Expandable;
