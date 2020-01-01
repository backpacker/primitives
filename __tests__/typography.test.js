import React from 'react';
import renderer from 'react-test-renderer';

import { BaseText, H1, ConfigProvider } from '../index'

describe('<BaseText>', () => {
  it('should render Alan Turing; default formatting', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <BaseText>Alan Turing</BaseText>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; bold', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <BaseText bold>Alan Turing</BaseText>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; uppercase underline strikeout semibold center', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <BaseText uppercase underline strikeout semibold center>Alan Turing</BaseText>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Alan Turing; fontWeight={thin} fontSize={18} color={#FFF}', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <BaseText fontWeight='thin' fontSize={18} color='#FFF'>Alan Turing</BaseText>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

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
})
