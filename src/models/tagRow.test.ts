import tagRow from './tagRow'

describe('It tags adjacent non-zero values in an array', () => {
  it('It should not affect rows with no adjacent ', () => {
    expect(tagRow([1, 0, 1, 0, 0])).toEqual([1, 0, 1, 0, 0])
    expect(tagRow([0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1])).toEqual([0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1])
    expect(tagRow([1, 0, 0, 0, 0, 0, 1])).toEqual([1, 0, 0, 0, 0, 0, 1])
  })

  it('Adjacent non-zero values should be tagged as -1', () => {
    expect(tagRow([1, 0, 1, 1, 0])).toEqual([1, 0, -1, -1, 0])
    expect(tagRow([1, 0, 1, 0, 1, 1, 1, 1, 0])).toEqual([1, 0, 1, 0, -1, -1, -1, -1, 0])
    expect(tagRow([1, 0, 1, 1, 1, 0, 1, 1, 0])).toEqual([1, 0, -1, -1, -1, 0, -1, -1, 0])
  })
})
