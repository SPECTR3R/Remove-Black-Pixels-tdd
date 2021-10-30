import { findClusters } from './findClusters'

describe('It tags adjacent "ones" values in a Matrix', () => {
  it('Case 1', () => {
    expect(
      findClusters([
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 1]
      ])
    ).toEqual([
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ])
  })
})
