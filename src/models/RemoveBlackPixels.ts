interface IRegionData {
  regionName: number
  regionSize: number
  isConnectedToBorder: boolean
}
export class RemoveBlackPixels {
  taggedRegions: number[][]
  regionData: Array<IRegionData>

  constructor(n: number, m: number) {
    this.taggedRegions = this.createEmptyMatrix(n, m)
    this.regionData = []
  }

  public createEmptyMatrix(n: number, m: number): number[][] {
    return new Array(n).fill(0).map(() => new Array(m).fill(0))
  }

  public doDFS(matrix: number[][], row: number, col: number, currentRegion: number): void {
    if (this.taggedRegions[row][col]) {
      return
    }

    // mark this vertex as visited and visit all its neighbors in depth first manner
    this.taggedRegions[row][col] = currentRegion
  }

  getTaggedRegions(matrix: number[][]): number[][] {
    let currentRegion = 1

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === currentRegion && !this.taggedRegions[row][col]) {
          this.doDFS(matrix, row, col, currentRegion)
          currentRegion = currentRegion + 1
        }
      }
    }

    return this.taggedRegions
  }
}
