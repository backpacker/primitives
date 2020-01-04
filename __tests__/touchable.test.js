/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import { Touchable } from '../index';

describe('<Touchable>', () => {
  it('should render a touchable component', () => {
    const tree = renderer.create(<Touchable onPress={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a disabled touchable component', () => {
    const tree = renderer
      .create(<Touchable onPress={() => null} isDisabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
