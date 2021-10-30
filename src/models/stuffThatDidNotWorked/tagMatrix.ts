import { tagRow } from './tagRow'

const transpose = (a: number[][]): number[][] => a[0].map((_, c) => a.map(r => r[c]))

export function tagMatrix(matrix: number[][]): number[][] {
  const rowsTagged = matrix.map(row => {
    return tagRow(row)
  })

  const rowsTaggedT = transpose(rowsTagged)

  const colsTagged = rowsTaggedT.map(col => {
    return tagRow(col)
  })
  const colsTaggedT = transpose(colsTagged)

  return colsTaggedT
}
