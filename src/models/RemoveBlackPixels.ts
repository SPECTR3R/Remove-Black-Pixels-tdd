interface IRegionData {
  [key: string]: {
    regionSize: number
    isConnectedToBorder: boolean
  }
}
export class RemoveBlackPixels {
  regionMatrix: number[][]
  inputMatrix: number[][]
  regionData: IRegionData
  currentRegion = 1

  constructor(matrix: number[][]) {
    this.regionMatrix = this.createEmptyMatrix(matrix.length, matrix[0].length)
    this.inputMatrix = matrix
    this.regionData = {}
  }

  private createEmptyMatrix(n: number, m: number): number[][] {
    return new Array(n).fill(0).map(() => new Array(m).fill(0))
  }

  private neighborExists(matrix: number[][], row: number, col: number): boolean {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
      if (matrix[row][col] == 1) {
        return true
      }
    }

    return false
  }

  public doDFS(matrix: number[][], row: number, col: number): void {
    if (this.regionMatrix[row][col]) {
      return
    }
    // mark this vertex as visited and visit all its neighbors in depth first manner
    this.regionMatrix[row][col] = this.currentRegion

    if (!this.regionData[this.currentRegion]) {
      this.regionData[this.currentRegion] = {
        regionSize: 1,
        isConnectedToBorder: row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[0].length - 1
      }
    } else {
      this.regionData[this.currentRegion].regionSize++
      if (row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[0].length - 1) {
        this.regionData[this.currentRegion].isConnectedToBorder = true
      }
    }

    // const regionSize = this.regionData[this.currentRegion]?.regionSize
    // const isConnectedToBorder = this.regionData[this.currentRegion]?.isConnectedToBorder

    // this.regionData[this.currentRegion].regionSize = regionSize ? regionSize + 1 : 1
    // this.regionData[this.currentRegion].isConnectedToBorder = isConnectedToBorder
    //   ? true
    //   : row === this.inputMatrix.length || this.inputMatrix[0].length === col

    const offsets: number[] = [-1, 0, +1]
    let rOffset: number, cOffset: number

    for (let l = 0; l < offsets.length; l++) {
      rOffset = offsets[l]
      for (let m = 0; m < offsets.length; m++) {
        cOffset = offsets[m]
        // do not consider central vertex ot diagonal vextexes as neighbors
        if (rOffset === 0 && cOffset === 0) {
          continue
        }
        if (rOffset === -1 && cOffset === -1) {
          continue
        }
        if (rOffset === -1 && cOffset === 1) {
          continue
        }
        if (rOffset === 1 && cOffset === -1) {
          continue
        }
        if (rOffset === 1 && cOffset === 1) {
          continue
        }

        // check if there exists a vertex at this offset and check if it is '1'
        if (this.neighborExists(matrix, row + rOffset, col + cOffset)) {
          this.doDFS(matrix, row + rOffset, col + cOffset)
        }
      }
    }
  }

  getRegionMatrix(): { regionsMatrix: number[][]; regionData: IRegionData } {
    for (let row = 0; row < this.inputMatrix.length; row++) {
      for (let col = 0; col < this.inputMatrix[0].length; col++) {
        if (this.inputMatrix[row][col] === 1 && !this.regionMatrix[row][col]) {
          this.doDFS(this.inputMatrix, row, col)
          this.currentRegion++
        }
      }
    }

    return { regionsMatrix: this.regionMatrix, regionData: this.regionData }
  }
}
