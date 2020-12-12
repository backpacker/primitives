/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Text, H1 } from '../src/typography';
import config, { weights } from '../src/config';

describe('<Text>', () => {
  it('should render Alan Turing; default formatting', () => {
    const tree = (
      <ConfigProvider>
        <Text>Alan Turing</Text>
      </ConfigProvider>
    );
    const { getByText } = render(tree);
    const t = getByText('Alan Turing');
    expect(t).toBeTruthy();
  });

  it('should render Alan Turing; center uppercase strikeout', () => {
    const tree = (
      <ConfigProvider>
        <Text center uppercase underline strikeout>
          Alan Turing
        </Text>
      </ConfigProvider>
    );
    const { getByText } = render(tree);
    const t = getByText('Alan Turing');
    expect(t).toBeTruthy();
    expect(t).toHaveStyle({
      textAlign: 'center',
      textTransform: 'uppercase',
      textDecorationLine: 'line-through'
    });
  });

  it('should render Alan Turing; underline', () => {
    const tree = (
      <ConfigProvider>
        <Text underline>Alan Turing</Text>
      </ConfigProvider>
    );
    const { getByText } = render(tree);
    const t = getByText('Alan Turing');
    expect(t).toBeTruthy();
    expect(t).toHaveStyle({
      textDecorationLine: 'underline'
    });
  });

  it('should render Alan Turing; fontSize={18} color={#FFF}', () => {
    const tree = (
      <ConfigProvider>
        <Text fontSize={18} color='#FFF'>
          Alan Turing
        </Text>
      </ConfigProvider>
    );
    const { getByText } = render(tree);
    const t = getByText('Alan Turing');
    expect(t).toBeTruthy();
    expect(t).toHaveStyle({
      fontSize: 18,
      color: '#FFF'
    });
  });

  it('should render Alan Turing; test all font weights', () => {
    const { normal, ...rest } = weights;
    const all = Object.keys(rest);
    all.forEach((fontWeight) => {
      const props = {
        [fontWeight]: true
      };
      const tree = (
        <ConfigProvider>
          <Text {...props}>Alan Turing</Text>
        </ConfigProvider>
      );
      const { getByText } = render(tree);
      const t = getByText('Alan Turing');
      expect(t).toBeTruthy();
      expect(t).toHaveStyle({
        fontWeight: weights[fontWeight]
      });
    });
  });
});

describe('<H1>', () => {
  it('should render Alan Turing', () => {
    const tree = (
      <ConfigProvider>
        <H1>Alan Turing</H1>
      </ConfigProvider>
    );
    const { getByText } = render(tree);
    const t = getByText('Alan Turing');
    expect(t).toBeTruthy();
    expect(t).toHaveStyle({
      fontSize: config.default.fontSize.h1
    });
  });
});
