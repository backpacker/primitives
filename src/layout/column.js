import React from 'react';

import BaseLayout from './base';

const Column = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseLayout flexDirection='column' {...rest}>
      {children}
    </BaseLayout>
  );
};

Column.propTypes = BaseLayout.propTypes;
Column.defaultProps = BaseLayout.defaultProps;

export default Column;
