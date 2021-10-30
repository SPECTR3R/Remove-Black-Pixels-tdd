export default function tagRow(arr: Array<number>): Array<number> {
  const canBeLeftConnected = !!arr[0]
  const canBeRigthConnected = !!arr[arr.length - 1]
  const newArr = [...arr]

  for (let index = 1; index < arr.length - 2; index++) {
    const num1 = Math.abs(arr[index])
    const num2 = Math.abs(arr[index + 1])
    if (num1 === num2 && num1 !== 0 && num1 !== 2) {
      newArr[index] = -num1
      newArr[index + 1] = -num2
    }
  }

  if (canBeLeftConnected) {
    for (let index = 1; index < newArr.length - 1; index++) {
      const num1 = Math.abs(arr[index])
      const num2 = Math.abs(arr[index + 1])

      if (num1 === num2 && num1 !== 0) {
        newArr[index] = 2
        newArr[index + 1] = 2
      } else {
        break
      }
    }
  }

  for (let index = newArr.length - 2; index > 1; index--) {
    if (canBeRigthConnected) {

      const num1 = Math.abs(arr[index])
      const num2 = Math.abs(arr[index - 1])

      if (num1 === num2 && num1 !== 0) {
        console.log('si don')

        newArr[index] = 2
        newArr[index - 1] = 2
      } else {
        break
      }
    }
  }

  return newArr
}
