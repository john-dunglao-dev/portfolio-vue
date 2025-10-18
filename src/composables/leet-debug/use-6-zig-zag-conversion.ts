export const useZigzagConversion = () => {
  const myAnswer = (s: string, numRows: number) => {
    if (numRows === 1 || numRows >= s.length) return s
    const spaces = numRows - 2
    const arrs: Array<string[]> = Array.from({ length: numRows }, () => [])
    console.debug('prep array', arrs)

    while (s.length > 0) {
      for (let i = 0; i < numRows; i++) {
        console.debug('pushing', s[i], 'into', arrs[i])
        arrs[i].push(s[i])
      }

      s = s.substring(numRows)

      let cursor = spaces
      if (spaces > 0) {
        for (let i = 0; i < spaces; i++) {
          arrs[cursor].push(s[i])
          cursor = (cursor + spaces + 1) % numRows
        }

        s = s.substring(spaces)
      }
    }

    return arrs.reduce((a, b) => a + b.join(''), '')
  }

  return { myAnswer }
}
