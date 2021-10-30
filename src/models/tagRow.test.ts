import tagRow from './tagRow'

describe('It tags adjacent non-zero values in an array', () => {
  it('It should not affect rows with no adjacent ', () => {
    console.log(tagRow([1]))
    const arr = [1, 0, 1, 0, 0]

    expect(tagRow(arr)).toEqual([1, 0, 1, 0, 0])
  })

  it('Adjacent non-zero values should be taged as -1', () => {
    const arr = [1, 0, 1, 1, 0]
    expect(tagRow(arr)).toEqual([1, 0, -1, -1, 0])
  })
})
