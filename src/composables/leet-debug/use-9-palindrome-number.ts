export const use9PalindromeNumber = () => {
  // this beats 70.60% of submissions but it converts the number to string
  const myAnswer = (x: number): boolean => {
    let check = true

    const converted = x.toString()
    let l = 0,
      r = converted.length - 1
    while (l < r) {
      if (converted[l] !== converted[r]) {
        check = false
        break
      }

      l++
      r--
    }

    return check
  }

  const solution = (x: number): boolean => {
    if (x < 0) return false

    let reverted = 0
    let original = x
    while (original > 0) {
      reverted = reverted * 10 + (original % 10)
      original = Math.floor(original / 10)
    }

    return reverted === x
  }

  return {
    myAnswer,
    solution,
  }
}
