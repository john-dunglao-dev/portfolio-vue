export const use66 = () => {
  const myAnswer = (digits: number[]): number[] => {
    const length = digits.length - 1
    let carry = 0

    for (let i = length; i >= 0; i--) {
      if (i === length) {
        digits[i] += 1
      }

      if (carry > 0) {
        digits[i] += carry
        carry = 0
      }

      if (digits[i] > 9) {
        carry = Math.floor(digits[i] / 10)
        digits[i] %= 10
        continue
      }

      break
    }

    if (carry > 0) {
      digits.unshift(carry)
    }

    return digits
  }

  return { myAnswer }
}
