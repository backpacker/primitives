import React, { useState, useEffect } from 'react';
import { UIManager, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';

import { Touchable } from '../touchable';
import { isIOS } from '../utils/platform';
import { noop } from '../utils/func';

const Expandable = ({
  children,
  initialState,
  renderHeader,
  onShow,
  onHide,
  layoutAnimationPreset
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

Expandable.propTypes = {
  initialState: PropTypes.bool,
  renderHeader: PropTypes.func,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  layoutAnimationPreset: PropTypes.shape({
    duration: PropTypes.number,
    create: PropTypes.shape({
      type: PropTypes.string,
      property: PropTypes.string,
      springDamping: PropTypes.number,
      initialVelocity: PropTypes.number,
      delay: PropTypes.number,
      duration: PropTypes.number
    }),
    update: PropTypes.shape({
      type: PropTypes.string,
      property: PropTypes.string,
      springDamping: PropTypes.number,
      initialVelocity: PropTypes.number,
      delay: PropTypes.number,
      duration: PropTypes.number
    }),
    delete: PropTypes.shape({
      type: PropTypes.string,
      property: PropTypes.string,
      springDamping: PropTypes.number,
      initialVelocity: PropTypes.number,
      delay: PropTypes.number,
      duration: PropTypes.number
    })
  })
};

Expandable.defaultProps = {
  initialState: false,
  renderHeader: noop,
  onShow: noop,
  onHide: noop,
  layoutAnimationPreset: LayoutAnimation.Presets.easeInEaseOut
};

export default Expandable;
