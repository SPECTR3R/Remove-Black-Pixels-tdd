export function findEdges(matrix: number[][]): number[][] {

  for (let r = 1; r < matrix.length - 1; r++) {
    for (let c = 1; c < matrix.length - 2; c++) {
      const num1 = Math.abs(matrix[r][c])
      const num2 = Math.abs(matrix[r][c + 1])
      if (num1 === num2 && num1 !== 0) {
        matrix[r][c] = -num1
        matrix[r][c + 1] = -num2
      }
    }
  }

  return matrix
}
