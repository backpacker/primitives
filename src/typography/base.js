import React, { useContext } from 'react';
import { Text } from 'react-native';

import ConfigContext from '../config-context';
import { makeStyle } from '../utils/style';

const BaseText = (props) => {
  const {
    children,

    uppercase,
    underline,
    strikeout,

    extralight,
    thin,
    light,
    medium,
    semibold,
    bold,
    heavy,
    extraheavy,

    fontSize,
    center,
    color,

    ...rest
  } = props;

  const { theme } = useContext(ConfigContext);
  const { fontFamily, fontWeight, colors, weights } = theme;

  const baseStyle = makeStyle([
    {
      fontFamily,
      fontWeight: weights[fontWeight],
      color: colors.text,
      textAlign: 'left'
    },
    uppercase && { textTransform: 'uppercase' },
    underline && { textDecorationLine: 'underline' },
    strikeout && { textDecorationLine: 'line-through' },
    center && { textAlign: 'center' },

    extralight && { fontWeight: weights.extralight },
    thin && { fontWeight: weights.thin },
    light && { fontWeight: weights.light },
    medium && { fontWeight: weights.medium },
    semibold && { fontWeight: weights.semibold },
    bold && { fontWeight: weights.bold },
    heavy && { fontWeight: weights.heavy },
    extraheavy && { fontWeight: weights.extraheavy },

    fontSize && { fontSize },
    color && { color },

    { ...rest }
  ]);

  return <Text style={baseStyle}>{children}</Text>;
};

export default BaseText;
