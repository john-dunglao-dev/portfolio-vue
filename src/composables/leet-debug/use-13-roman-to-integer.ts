export const use13RomanToInteger = () => {
  // beats 24%
  const myAnswer = (s: string): number => {
    console.debug('--- Debug Info ---')
    console.debug('Input string:', s)

    let result = 0

    const romanMap: Array<[string, number]> = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1],
    ]

    for (const [roman, value] of romanMap) {
      if (s.length === 0) break

      while (s.startsWith(roman)) {
        console.debug(`Matching roman numeral: ${roman}, adding value: ${value}`)
        result += value
        s = s.slice(roman.length)
      }
    }

    return result
  }

  const anotherAnswer = (s: string): number => {
    const wildcards: Array<[string, number]> = [
      ['CM', 900],
      ['CD', 400],
      ['XC', 90],
      ['XL', 40],
      ['IX', 9],
      ['IV', 4],
    ]
    const singles: Record<string, number> = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    }

    let result = 0

    for (const [roman, value] of wildcards) {
      if (s.includes(roman)) {
        result += value
        s = s.replace(roman, '')
      }
    }

    for (const char of s) {
      result += singles[char] || 0
    }

    return result
  }

  const solution = (s: string): number => {
    const romanMap: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }

    let total = 0

    for (let i = 0; i < s.length; i++) {
      const currentVal = romanMap[s[i]]
      const nextVal = romanMap[s[i + 1]]

      if (nextVal && currentVal < nextVal) {
        total -= currentVal
      } else {
        total += currentVal
      }
    }

    return total
  }

  return { myAnswer, anotherAnswer, solution }
}
