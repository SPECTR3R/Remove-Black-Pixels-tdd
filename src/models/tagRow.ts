export default function tagRow(arr: Array<number>): Array<number> {
  for (let index = 1; index < arr.length - 1; index++) {
    const num1 = Math.abs(arr[index])
    const num2 = Math.abs(arr[index + 1])
    if (num1 === num2 && num1 !== 0) {
      arr[index] = -num1
      arr[index + 1] = -num2
    }
  }
  return arr
}
