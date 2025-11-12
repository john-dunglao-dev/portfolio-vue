export const use67 = () => {
  const myAnswer = (a: string, b: string): string => {
    let carry = 0
    const aLength = a.length
    const bLength = b.length
    const maxLength = Math.max(aLength, bLength)
    let sum = ''

    for (let i = 0; i < maxLength; i++) {
      const aIndex = a.length - 1 - i
      const bIndex = b.length - 1 - i
      let attach = ''

      if (a?.[aIndex] === '1' && b?.[bIndex] === '1') {
        if (carry > 0) {
          carry--
          attach = '1'
        } else {
          attach = '0'
        }

        carry++
      } else if (a?.[aIndex] === '1' || b?.[bIndex] === '1') {
        if (carry > 0) {
          attach = '0'
        } else {
          attach = '1'
        }
      } else {
        if (carry > 0) {
          carry--
          attach = '1'
        } else {
          attach = '0'
        }
      }

      sum = attach + sum
    }

    if (carry > 0) {
      sum = '1' + sum
    }

    return sum
  }

  return { myAnswer }
}
