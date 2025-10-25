export const use11IntegerToRoman = () => {
  const myAnswer = (num: number): string => {
    console.debug('--- Debug Info ---')
    console.debug('Input number:', num)

    const numerals: Array<[string, number]> = [
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
    let result = ''

    for (const [roman, value] of numerals) {
      if (num === 0) break

      while (num >= value) {
        result += roman
        num -= value
        console.debug(`Appended '${roman}', remaining number: ${num}`)
      }
    }

    return result
  }

  return { myAnswer }
}
