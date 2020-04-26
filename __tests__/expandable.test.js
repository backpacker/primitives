/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Expandable } from '../src/expandable';
import { Row, Column } from '../src/layout';
import { H2 } from '../src/typography';

test('Test Expandable states', async () => {
  const Header = () => (
    <Row>
      <H2>Expand me</H2>
    </Row>
  );
  const tree = (
    <ConfigProvider>
      <Expandable renderHeader={() => <Header />}>
        <Column>
          <H2>This is the content</H2>
        </Column>
      </Expandable>
    </ConfigProvider>
  );
  const { queryByText, getByText } = render(tree);

  // Initially, it's collapsed
  let contentText = queryByText('This is the content');
  expect(contentText).toBeNull(); // contentText doesn't exist

  // Expand it
  const expandableHeader = getByText('Expand me');
  fireEvent.press(expandableHeader);

  // Check for contentText existance
  contentText = queryByText('This is the content');
  expect(contentText).toBeTruthy();
});
