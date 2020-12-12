/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Column, Row, Float } from '../src/layout';
import { H1 } from '../src/typography';

describe('<Column>', () => {
  it('should render two H1 elements in column layout, centered', () => {
    const tree = (
      <ConfigProvider>
        <Column center testID='column'>
          <H1>Brian Kernighan</H1>
          <H1>Dennis Ritchie</H1>
        </Column>
      </ConfigProvider>
    );
    const { getByText, queryByTestId } = render(tree);
    const col = queryByTestId('column');
    expect(col).toHaveStyle({
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    });
    const t1 = getByText('Brian Kernighan');
    const t2 = getByText('Dennis Ritchie');
    expect(t1).toBeTruthy();
    expect(t2).toBeTruthy();
  });
});

describe('<Row>', () => {
  it('should render two H1 elements in row layout', () => {
    const tree = (
      <ConfigProvider>
        <Row testID='row'>
          <H1>Brian Kernighan</H1>
          <H1>Dennis Ritchie</H1>
        </Row>
      </ConfigProvider>
    );
    const { getByText, queryByTestId } = render(tree);
    const col = queryByTestId('row');
    expect(col).toHaveStyle({
      flexDirection: 'row'
    });
    const t1 = getByText('Brian Kernighan');
    const t2 = getByText('Dennis Ritchie');
    expect(t1).toBeTruthy();
    expect(t2).toBeTruthy();
  });
});

describe('<Float>', () => {
  it('should render two H1 elements in float layout', () => {
    const tree = (
      <ConfigProvider>
        <Float testID='row'>
          <H1>Brian Kernighan</H1>
          <H1>Dennis Ritchie</H1>
        </Float>
      </ConfigProvider>
    );
    const { getByText, queryByTestId } = render(tree);
    const col = queryByTestId('row');
    expect(col).toHaveStyle({
      position: 'absolute',
      zIndex: 1
    });
    const t1 = getByText('Brian Kernighan');
    const t2 = getByText('Dennis Ritchie');
    expect(t1).toBeTruthy();
    expect(t2).toBeTruthy();
  });
});
