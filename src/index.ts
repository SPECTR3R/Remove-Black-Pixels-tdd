import { tagRow } from './models/tagRow'

const matrix = [
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1]
]

const transpose = (a: number[][]): number[][] => a[0].map((_, c) => a.map(r => r[c]))

const matrix2 = matrix.map(row => {
  return tagRow(row)
})

const transposedMatrix2 = transpose(matrix2)

transposedMatrix2.forEach(row => {
  console.log(tagRow(row))
})
