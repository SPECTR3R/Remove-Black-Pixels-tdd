import { findEdges } from './findEdges'

describe('It tags adjacent "ones" values in a Matrix', () => {
  it('It should return the same matrix if no adjacent vaules are present ', () => {
    expect(
      findEdges([
        [1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 1]
      ])
    ).toEqual([
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ])
  })
})
