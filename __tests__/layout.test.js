import React from 'react';
import renderer from 'react-test-renderer';

import { ConfigProvider, Column, Row, Float, H1 } from '../index'

describe('<Column>', () => {
  it('should render two H1 elements in column layout, centered', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <Column center>
              <H1>Brian Kernighan</H1>
              <H1>Dennis Ritchie</H1>
            </Column>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Row>', () => {
  it('should render two H1 elements in row layout', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <Row>
              <H1>Brian Kernighan</H1>
              <H1>Dennis Ritchie</H1>
            </Row>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('<Float>', () => {
  it('should render two H1 elements in float layout', () => {
    const tree = renderer
      .create(
          <ConfigProvider>
            <Float>
              <H1>Brian Kernighan</H1>
              <H1>Dennis Ritchie</H1>
            </Float>
          </ConfigProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
