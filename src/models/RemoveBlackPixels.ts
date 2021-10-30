interface IRegionData {
  [key: string]: {
    regionName: number
    regionSize: number
    isConnectedToBorder: boolean
  }
}
export class RemoveBlackPixels {
  regionMatrix: number[][]
  inputMatrix: number[][]
  regionData: IRegionData

  constructor(matrix: number[][]) {
    this.regionMatrix = this.createEmptyMatrix(matrix.length, matrix[0].length)
    this.inputMatrix = matrix
    this.regionData = {}
  }

  private createEmptyMatrix(n: number, m: number): number[][] {
    return new Array(n).fill(0).map(() => new Array(m).fill(0))
  }

  public doDFS(matrix: number[][], row: number, col: number, currentRegion: number): void {
    if (this.regionMatrix[row][col]) {
      return
    }
    console.log(row, col)

    // mark this vertex as visited and visit all its neighbors in depth first manner
    this.regionMatrix[row][col] = currentRegion
  }

  getRegionMatrix(): { regionsMatrix: number[][]; regionData: IRegionData } {
    let currentRegion = 1

    // Travese through the given matrix to find all the vextexes
    for (let row = 0; row < this.inputMatrix.length; row++) {
      for (let col = 0; col < this.inputMatrix[0].length; col++) {
        if (this.inputMatrix[row][col] === 1 && this.regionMatrix[row][col] !== currentRegion) {
          this.doDFS(this.inputMatrix, row, col, currentRegion)
          currentRegion = currentRegion + 1
        }
      }
    }

    return { regionsMatrix: this.regionMatrix, regionData: this.regionData }
  }
}
