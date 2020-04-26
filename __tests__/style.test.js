/* eslint-env jest */
import { makeStyle } from '../src/utils/style';

describe('test makeStyle', () => {
  it('should return empty style obj', () => {
    expect(makeStyle()).toEqual({});
  });
});
