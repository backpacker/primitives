/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import { ConfigProvider, Spacer } from '../index';

describe('<Spacer>', () => {
  it('should render spacer - default size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
