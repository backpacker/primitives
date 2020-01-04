import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { ConfigConsumer } from '../config-context';
import { makeStyle } from '../utils/style';

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
          const { typography, colorScheme } = config;

          const baseStyle = makeStyle([
            {
              fontFamily: typography.fontFamily.default,
              fontWeight: typography.fontWeight.normal,
              color: colorScheme.text.default
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
          ]);

          return <Text style={baseStyle}>{children}</Text>;
        }}
      </ConfigConsumer>
    );
  }
}

export default BaseText;
