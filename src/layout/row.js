import React from 'react';

import BaseLayout from './base';

const RowLayout = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseLayout
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      {...rest}>
      {children}
    </BaseLayout>
  );
};

export default RowLayout;
