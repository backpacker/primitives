/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { defaultTheme } from '../src/config';
import { Spacer } from '../src/spacer';

const { spacerUnit, defaultSpacerSize } = defaultTheme;
const spacing = (size = defaultSpacerSize) => size * spacerUnit;

describe('<Spacer>', () => {
  it('should render spacer - default size', () => {
    const tree = (
      <ConfigProvider>
        <Spacer testID='spacer' />
      </ConfigProvider>
    );
    const { queryByTestId } = render(tree);
    const spacer = queryByTestId('spacer');
    const size = spacing();
    expect(spacer).toHaveStyle({
      width: size,
      height: size
    });
  });

  it('should render spacer - size={5}', () => {
    const tree = (
      <ConfigProvider>
        <Spacer testID='spacer' size={5} />
      </ConfigProvider>
    );
    const { queryByTestId } = render(tree);
    const spacer = queryByTestId('spacer');
    const size = spacing(5);
    expect(spacer).toHaveStyle({
      width: size,
      height: size
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
    expect(spacer).toHaveStyle({
      width: '100%',
      height: spacing()
    });
  });

  it('should render spacer - full height', () => {
    const tree = (
      <ConfigProvider>
        <Spacer testID='spacer' fullHeight />
      </ConfigProvider>
    );
    const { queryByTestId } = render(tree);
    const spacer = queryByTestId('spacer');
    expect(spacer).toHaveStyle({
      width: spacing(),
      height: '100%'
    });
  });
});
