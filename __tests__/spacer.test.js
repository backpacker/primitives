/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Spacer } from '../src/spacer';

describe('<Spacer>', () => {
  it('should render spacer - default size', () => {
    const tree = (
      <ConfigProvider>
        <Spacer testID='spacer' />
      </ConfigProvider>
    );
    const { queryByTestId } = render(tree);
    const spacer = queryByTestId('spacer');
    const defaultSize = 18;
    expect(spacer).toHaveStyle({
      width: defaultSize,
      height: defaultSize
    });
  });

  it('should render spacer - full width', () => {
    const tree = (
      <ConfigProvider>
        <Spacer testID='spacer' fullWidth />
      </ConfigProvider>
    );
    const { queryByTestId } = render(tree);
    const spacer = queryByTestId('spacer');
    const defaultSize = 18;
    expect(spacer).toHaveStyle({
      width: '100%',
      height: defaultSize
    });
  });
});
