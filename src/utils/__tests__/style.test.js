import { makeStyle } from '../style'

describe('test makeStyle', () => {
  it('should return empty style array', () => {
    expect(makeStyle()).toEqual([])
  })
})
