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

  it('should render spacer - default size, full width, in debug mode', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer fullWidth isDebug />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spacer - smallest size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer smallest />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spacer - small size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer small />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spacer - medium size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer medium />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spacer - large size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer large />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spacer - largest size', () => {
    const tree = renderer
      .create(
        <ConfigProvider>
          <Spacer largest />
        </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
