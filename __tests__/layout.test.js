/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Column, Row, Float } from '../src/layout';
import { Text } from '../src/typography';

describe('<Column>', () => {
  it('should render two Text elements in column layout, centered', () => {
    const tree = (
      <ConfigProvider>
        <Column center testID='column'>
          <Text>Brian Kernighan</Text>
          <Text>Dennis Ritchie</Text>
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
  it('should render two Text elements in row layout', () => {
    const tree = (
      <ConfigProvider>
        <Row testID='row'>
          <Text>Brian Kernighan</Text>
          <Text>Dennis Ritchie</Text>
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
  it('should render two Text elements in float layout', () => {
    const tree = (
      <ConfigProvider>
        <Float testID='row'>
          <Text>Brian Kernighan</Text>
          <Text>Dennis Ritchie</Text>
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
