import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { ConfigConsumer } from '../config-context';

class BaseText extends PureComponent {
  render() {
    const {
      children,
      uppercase,
      underline,
      strikeout,
      semibold,
      bold,
      fontWeight,
      fontSize,
      center,
      color,
      ...rest
    } = this.props;

    return (
      <ConfigConsumer>
        {({ config }) => {
          const { typography } = config;

          const baseStyle = [
            {
              fontFamily: typography.fontFamily.default,
              fontWeight: typography.fontWeight.normal,
              color: '#000' // TODO: change this
            },
            uppercase && { textTransform: 'uppercase' },
            underline && { textDecorationLine: 'underline' },
            strikeout && { textDecorationLine: 'line-through' },
            semibold && { fontWeight: typography.fontWeight.semibold },
            bold && { fontWeight: typography.fontWeight.bold },
            fontWeight && { fontWeight: typography.fontWeight[fontWeight] },
            fontSize && { fontSize },
            center && { textAlign: 'center' },
            color && { color },
            { ...rest }
          ].filter(Boolean);

          return <Text style={baseStyle}>{children}</Text>;
        }}
      </ConfigConsumer>
    );
  }
}

export default BaseText;
