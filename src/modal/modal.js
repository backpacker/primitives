import React, { PureComponent } from 'react';
import { Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import { ModalPropTypes } from '../prop-types';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.state = {
      isVisible: false
    };
  }

  show() {
    const { onShow } = this.props;
    this.setState({ isVisible: true });

    if (onShow) {
      onShow();
    }
  }

  hide() {
    const { onHide } = this.props;
    this.setState({ isVisible: false });

    if (onHide) {
      onHide();
    }
  }

  render() {
    const { children, animationType, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <RNModal
        animationType={animationType}
        visible={isVisible}
        onRequestClose={this.hide}
        {...rest}>
        {children}
      </RNModal>
    );
  }
}

Modal.propTypes = {
  ...ModalPropTypes,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  animationType: PropTypes.oneOf(['none', 'slide', 'fade'])
};

Modal.defaultProps = {
  onShow: () => {},
  onHide: () => {},
  animationType: 'fade'
};

export default Modal;
