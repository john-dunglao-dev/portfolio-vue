export const use17 = () => {
  // somehow beats 100%
  const myAnswer = (digits: string): string[] => {
    const mapping: Record<string, string[]> = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    }
    let result: string[] = []

    for (let i = 0; i < digits.length; i++) {
      if (!mapping?.[digits[i]]) continue
      console.debug('mapping found for', digits[i], '=', mapping[digits[i]])

      if (!result.length) {
        console.debug('pushing to empty array', mapping[digits[i]])
        result.push(...mapping[digits[i]])
        continue
      }

      const addResults = []
      for (let j = 0; j < mapping[digits[i]].length; j++) {
        console.debug('appending', mapping[digits[i]][j])
        addResults.push(...result.map((resultItem) => resultItem + mapping[digits[i]][j]))
      }

      result = addResults
    }

    return result
  }

  return {
    myAnswer,
  }
}
