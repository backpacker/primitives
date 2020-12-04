import React from 'react';

import BaseLayout from './base';

const Row = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseLayout flexDirection='row' {...rest}>
      {children}
    </BaseLayout>
  );
};

Row.propTypes = BaseLayout.propTypes;
Row.defaultProps = BaseLayout.defaultProps;

export default Row;
