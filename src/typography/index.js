import React from 'react';

import BaseText from './base';
import config from '../config';

const makeHeadingComponent = (fontSize) => {
  return ({ children, ...rest }) => (
    <BaseText fontSize={fontSize} {...rest}>
      {children}
    </BaseText>
  );
};

const [H6, H5, H4, H3, H2, H1] = Object.keys(config.typography.fontSize).map(
  makeHeadingComponent
);

export { BaseText, H6, H5, H4, H3, H2, H1 };
