import React, { useContext } from 'react';

import BaseText from './base';
import ConfigContext from '../config-context';
import config from '../config';

const fontSizeArr = config[config.activeTheme].fontSize;

const makeHeadingComponent = (index) => {
  return ({ children, ...rest }) => {
    const { theme } = useContext(ConfigContext);
    const { fontSize } = theme;

    return (
      <BaseText fontSize={fontSize[index]} {...rest}>
        {children}
      </BaseText>
    );
  };
};

const [H1, H2, H3, H4, H5, H6, H7, H8] = fontSizeArr.map((_, index) =>
  makeHeadingComponent(index)
);

export { BaseText, H1, H2, H3, H4, H5, H6, H7, H8 };
