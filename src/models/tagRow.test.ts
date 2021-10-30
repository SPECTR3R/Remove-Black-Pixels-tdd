import tagRow from './tagRow'

describe('It should not affect rows with no adjacent 1', () => {
  it('tagRow', () => {
    console.log(tagRow([1]))
    const arr = [1, 0, 1, 0, 0]

    expect(tagRow(arr)).toEqual([1, 0, 1, 0, 0])
  })
})
