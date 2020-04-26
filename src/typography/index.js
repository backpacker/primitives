import React, { useContext } from 'react';

import BaseText from './base';
import ConfigContext from '../config-context';
import config from '../config';

const makeHeadingComponent = ({ key }) => {
  return ({ children, ...rest }) => {
    const { theme } = useContext(ConfigContext);
    const { fontSize } = theme;

    return (
      <BaseText fontSize={fontSize[key]} {...rest}>
        {children}
      </BaseText>
    );
  };
};

const [H1, H2, H3, H4, H5, H6, H7, H8] = Object.entries(
  config.default.fontSize
).map(([key]) => makeHeadingComponent({ key }));

export { BaseText, H1, H2, H3, H4, H5, H6, H7, H8 };
