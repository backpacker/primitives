/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Touchable } from '../src/touchable';

describe('<Touchable>', () => {
  it('should render a touchable component', () => {
    const tree = <Touchable onPress={() => 42} testID='touchable' />;
    const { queryByTestId } = render(tree);
    const t = queryByTestId('touchable');
    const res = fireEvent.press(t);
    expect(res).toBe(42);
  });

  it('should render a disabled touchable component', () => {
    const tree = <Touchable onPress={() => 42} testID='touchable' isDisabled />;
    const { queryByTestId } = render(tree);
    const t = queryByTestId('touchable');
    const res = fireEvent.press(t);
    expect(res).toBeNull();
    expect(t).toBeDisabled();
  });
});
