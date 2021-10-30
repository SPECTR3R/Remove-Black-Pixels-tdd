import { findClusters } from './findClusters'

describe('It tags adjacent "ones" values in a Matrix', () => {
  it('It should return the same matrix if no adjacent vaules are present ', () => {
    expect(
      findClusters([
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
  it('it tags adjacent "one" values horizontally as -1', () => {
    expect(
      findClusters([
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1]
      ])
    ).toEqual([
      [1, 0, 0, 0, 0],
      [0, -1, -1, -1, 0],
      [0, 0, 0, 0, 0],
      [0, -1, -1, 0, 0],
      [0, 0, 0, 0, 1]
    ])
  })

  it('Values in left and right border should not be tagged ', () => {
    expect(
      findClusters([
        [1, 0, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1]
      ])
    ).toEqual([
      [1, 0, 0, 0, 0],
      [1, 0, -1, -1, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1]
    ])
  })

  it('Values in top and bottom border should not be tagged ', () => {
    expect(
      findClusters([
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1]
      ])
    ).toEqual([
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, -1, -1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1]
    ])
  })

  it('Values in top and bottom border should not be tagged ', () => {
    expect(
      findClusters([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1]
      ])
    ).toEqual([
      [1, 0, 1, 0, 0],
      [1, 0, -1, 0, 0],
      [0, 0, -1, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1]
    ])
  })
  expect(
    findClusters([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ])
  ).toEqual([
    [0, 0, 0, 0, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, 0, 0, 0, 0]
  ])
  expect(
    findClusters([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ])
  ).toEqual([
    [1, 1, 1, 1, 1],
    [1, -1, -1, -1, 1],
    [1, -1, -1, -1, 1],
    [1, -1, -1, -1, 1],
    [1, 1, 1, 1, 1]
  ])
})
