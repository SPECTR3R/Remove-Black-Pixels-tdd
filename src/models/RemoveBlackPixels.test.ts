import { RemoveBlackPixels } from './RemoveBlackPixels'

describe('Product Class', () => {
  it('Creates an instance of RemoveBlackPixels', () => {
    const matrix = [
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ]
    const removeBlackPixels: RemoveBlackPixels = new RemoveBlackPixels(matrix)

    expect(removeBlackPixels).toBeDefined()
    expect(removeBlackPixels.inputMatrix).toEqual(matrix)
    expect(removeBlackPixels.regionData).toEqual({})
    expect(removeBlackPixels.regionMatrix).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])
  })

  it('Tags individual regions with natural numbers from 1 to N, where N is the total number of regions', () => {
    const matrix = [
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1]
    ]
    const removeBlackPixels: RemoveBlackPixels = new RemoveBlackPixels(matrix)

    const { regionsMatrix, regionData } = removeBlackPixels.getRegionMatrix()

    expect(regionsMatrix).toEqual([
      [1, 0, 2, 0, 0],
      [0, 3, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 5, 0, 6, 0],
      [0, 0, 7, 0, 8]
    ])
  })

  it('Tags adjacent regions to with natural numbers from 1 to N, where N is the total number of regions', () => {
    const removeBlackPixels: RemoveBlackPixels = new RemoveBlackPixels([
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1]
    ])

    const { regionsMatrix, regionData } = removeBlackPixels.getRegionMatrix()
    console.log(regionData, 'b')

    expect(regionsMatrix).toEqual([
      [1, 1, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 2, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 3]
    ])
  })
})
