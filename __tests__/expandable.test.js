/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ConfigProvider } from '../src/config-context';
import { Expandable } from '../src/expandable';
import { Row, Column } from '../src/layout';
import { Text } from '../src/typography';

test('Test Expandable states', async () => {
  const Header = () => (
    <Row>
      <Text>Expand me</Text>
    </Row>
  );
  const tree = (
    <ConfigProvider>
      <Expandable renderHeader={() => <Header />}>
        <Column>
          <Text>This is the content</Text>
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
