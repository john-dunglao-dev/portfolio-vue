export const useReverseInteger = () => {
  const check = (n: number): boolean => {
    return n >= Math.pow(-2, 31) && n <= Math.pow(2, 31) - 1
  }

  const myAnswer = (x: number) => {
    const absoluteValue = Math.abs(x)
    const isNegative = x < 0
    const reversed = absoluteValue.toString().split('').reverse().join('')
    x = parseInt(reversed)

    if (isNegative) {
      x = -x
    }

    return check(x) ? x : 0
  }

  return { myAnswer }
}
