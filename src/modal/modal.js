import React, { PureComponent } from 'react';
import { Modal } from 'react-native';

export default class BaseModal extends PureComponent {
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
    const { children, animationType = 'fade', ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Modal
        animationType={animationType}
        visible={isVisible}
        onRequestClose={this.hide}
        {...rest}>
        {children}
      </Modal>
    );
  }
}
