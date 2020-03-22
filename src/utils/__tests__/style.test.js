/* eslint-env jest */
import { makeStyle } from '../style';

describe('test makeStyle', () => {
  it('should return empty style obj', () => {
    expect(makeStyle()).toEqual({});
  });
});
