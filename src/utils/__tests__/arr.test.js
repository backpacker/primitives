/* eslint-env jest */
import { filterFalsy } from '../arr';

describe('test filterFalsy', () => {
  it('should filter all falsy values', () => {
    const input = [1, 2, null, {}, undefined];
    const output = [1, 2, {}];
    expect(filterFalsy(input)).toEqual(output);
  });

  it('should return empty array', () => {
    expect(filterFalsy()).toEqual([]);
  });
});
