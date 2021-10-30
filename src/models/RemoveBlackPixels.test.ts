import { RemoveBlackPixels } from './RemoveBlackPixels'

interface IRegionData {
  [key: string]: {
    regionSize: number
    isConnectedToBorder: boolean
  }
}

describe('RemoveBlackPixels Class', () => {
  let removeBlackPixels: RemoveBlackPixels
  let matrix: number[][]
  beforeEach(() => {
    matrix = [
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ]
    removeBlackPixels = new RemoveBlackPixels(matrix)
  })

  it('Creates an instance of RemoveBlackPixels', () => {
    expect(removeBlackPixels).toBeDefined()
  })

  it('Initializes the inputMatrix property with matrix passed to the constructor', () => {
    expect(removeBlackPixels.inputMatrix).toEqual(matrix)
    expect(removeBlackPixels.regionsData).toEqual({})
    expect(removeBlackPixels.regionMatrix).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])
  })
  it('Initializes the regionMatrix property with an empty array of zeroes the size of the input matrix', () => {
    expect(removeBlackPixels.regionMatrix).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])
  })
  it('Initializes the regionData property with an empty object', () => {
    expect(removeBlackPixels.inputMatrix).toEqual(matrix)
  })
})

describe('RemoveBlackPixels Class, has method called "groupBlackPixels", which', () => {
  let removeBlackPixels: RemoveBlackPixels
  let matrix: number[][]
  let groupResult: { regionsMatrix: number[][]; regionsData: IRegionData }

  beforeEach(() => {
    matrix = [
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1]
    ]
    removeBlackPixels = new RemoveBlackPixels(matrix)
    groupResult = removeBlackPixels.groupBlackPixels()
  })

  it('Tags individual regions with natural numbers from 1 to N, where N is the total number of regions', () => {
    const { regionsMatrix, regionsData } = groupResult
    expect(regionsMatrix).toEqual([
      [1, 0, 2, 0, 0],
      [0, 3, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 5, 0, 6, 0],
      [0, 0, 7, 0, 8]
    ])
    expect(regionsData[1]).toEqual({ regionSize: 1, isConnectedToBorder: true })
    expect(regionsData[2]).toEqual({ regionSize: 1, isConnectedToBorder: true })
    expect(regionsData[3]).toEqual({ regionSize: 1, isConnectedToBorder: false })
    expect(regionsData[4]).toEqual({ regionSize: 1, isConnectedToBorder: false })
    expect(regionsData[5]).toEqual({ regionSize: 1, isConnectedToBorder: false })
    expect(regionsData[6]).toEqual({ regionSize: 1, isConnectedToBorder: false })
    expect(regionsData[7]).toEqual({ regionSize: 1, isConnectedToBorder: true })
    expect(regionsData[7]).toEqual({ regionSize: 1, isConnectedToBorder: true })
  })
})

describe('RemoveBlackPixels Class, has method called "groupBlackPixels", which also', () => {
  let removeBlackPixels: RemoveBlackPixels
  let matrix: number[][]
  beforeEach(() => {
    matrix = [
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1]
    ]
    removeBlackPixels = new RemoveBlackPixels(matrix)
  })

  it('Tags adjacent regions to with natural numbers from 1 to N, where N is the total number of regions', () => {
    const { regionsMatrix, regionsData } = removeBlackPixels.groupBlackPixels()

    expect(regionsMatrix).toEqual([
      [1, 1, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 2, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 3]
    ])
  })
})
// describe('RemoveBlackPixels Class, has method called "groupBlackPixels", which also', () => {
//   it('Tags individual regions with natural numbers from 1 to N, where N is the total number of regions', () => {
//     const matrix = [
//       [1, 0, 1, 0, 0],
//       [0, 1, 0, 1, 0],
//       [0, 0, 0, 0, 0],
//       [0, 1, 0, 1, 0],
//       [0, 0, 1, 0, 1]
//     ]
//     const removeBlackPixels: RemoveBlackPixels = new RemoveBlackPixels(matrix)

//     const { regionsMatrix, regionsData } = removeBlackPixels.groupBlackPixels()

//     expect(regionsMatrix).toEqual([
//       [1, 0, 2, 0, 0],
//       [0, 3, 0, 4, 0],
//       [0, 0, 0, 0, 0],
//       [0, 5, 0, 6, 0],
//       [0, 0, 7, 0, 8]
//     ])
//     expect(regionsData[1]).toEqual({ regionSize: 1, isConnectedToBorder: true })
//     expect(regionsData[2]).toEqual({ regionSize: 1, isConnectedToBorder: true })
//     expect(regionsData[3]).toEqual({ regionSize: 1, isConnectedToBorder: false })
//     expect(regionsData[4]).toEqual({ regionSize: 1, isConnectedToBorder: false })
//     expect(regionsData[5]).toEqual({ regionSize: 1, isConnectedToBorder: false })
//     expect(regionsData[6]).toEqual({ regionSize: 1, isConnectedToBorder: false })
//     expect(regionsData[7]).toEqual({ regionSize: 1, isConnectedToBorder: true })
//     expect(regionsData[7]).toEqual({ regionSize: 1, isConnectedToBorder: true })
//   })

//   it('Tags adjacent regions to with natural numbers from 1 to N, where N is the total number of regions', () => {
//     const removeBlackPixels: RemoveBlackPixels = new RemoveBlackPixels([
//       [1, 1, 0, 0, 0],
//       [0, 0, 0, 1, 1],
//       [0, 0, 0, 1, 0],
//       [0, 1, 1, 1, 0],
//       [0, 0, 0, 0, 1]
//     ])

//     const { regionsMatrix, regionsData } = removeBlackPixels.groupBlackPixels()

//     expect(regionsMatrix).toEqual([
//       [1, 1, 0, 0, 0],
//       [0, 0, 0, 2, 2],
//       [0, 0, 0, 2, 0],
//       [0, 2, 2, 2, 0],
//       [0, 0, 0, 0, 3]
//     ])
//   })
