import { tagRow } from './tagRow'

describe('It tags adjacent "ones" values in an array', () => {
  it('It should not affect rows with no adjacent ones', () => {
    expect(tagRow([1, 0, 1, 0, 0])).toEqual([1, 0, 1, 0, 0])
    expect(tagRow([0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1])).toEqual([0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1])
    expect(tagRow([1, 0, 0, 0, 0, 0, 1])).toEqual([1, 0, 0, 0, 0, 0, 1])
  })

  it('Adjacent "ones" should be tagged as -1', () => {
    expect(tagRow([1, 0, 1, 1, 0])).toEqual([1, 0, -1, -1, 0])
    expect(tagRow([1, 0, 1, 0, 1, 1, 1, 1, 0])).toEqual([1, 0, 1, 0, -1, -1, -1, -1, 0])
    expect(tagRow([1, 0, 1, 1, 1, 0, 1, 1, 0])).toEqual([1, 0, -1, -1, -1, 0, -1, -1, 0])
  })
  it('Adjacent "ones" connected to a "one" in the left border should be tagged as 2', () => {
    expect(tagRow([1, 1, 1, 1, 0])).toEqual([1, 2, 2, 2, 0])
    expect(tagRow([1, 1, 1, 0, 1, 1, 1, 1, 0])).toEqual([1, 2, 2, 0, -1, -1, -1, -1, 0])
    expect(tagRow([1, 1, 1, 1, 1, 0, 1, 1, 0])).toEqual([1, 2, 2, 2, 2, 0, -1, -1, 0])
    expect(tagRow([1, 1, 0, 1, 0])).toEqual([1, 2, 0, 1, 0])
  })
  it('Adjacent "ones" connected to a "one" in the rigth border should be tagged as 2', () => {
    expect(tagRow([0, 0, 1, 1, 1])).toEqual([0, 0, 2, 2, 1])
    expect(tagRow([0, 1, 1, 0, 1, 1, 1, 1, 1])).toEqual([0, -1, -1, 0, 2, 2, 2, 2, 1])
    expect(tagRow([1, 1, 1, 1, 1, 0, 1, 1, 1])).toEqual([1, 2, 2, 2, 2, 0, 2, 2, 1])
    expect(tagRow([0, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([0, 2, 2, 2, 2, 2, 2, 2, 1])
    expect(tagRow([0, 1, 0, 1, 1])).toEqual([0, 1, 0, 2, 1])
  })

  it('Adjacent "ones" to "2" from the rigth should be tagged as 2', () => {
    expect(tagRow([0, 2, 1, 1, 0])).toEqual([0, 2, 2, 2, 0])
  })
})
