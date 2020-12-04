/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import { ConfigProvider } from '../src/config-context';
import { Text, H1 } from '../src/typography';

describe('<Text>', () => {
  it('should render Alan Turing; default formatting', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Text>Alan Turing</Text>
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; bold', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Text bold>Alan Turing</Text>
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; uppercase underline strikeout semibold center', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Text uppercase underline strikeout semibold center>
            Alan Turing
          </Text>
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; thin fontSize={18} color={#FFF}', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Text thin fontSize={18} color='#FFF'>
            Alan Turing
          </Text>
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<H1>', () => {
  it('should render Alan Turing', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <H1>Alan Turing</H1>
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
