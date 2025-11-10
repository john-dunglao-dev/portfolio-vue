export const use58 = () => {
  // beats 40% only
  const myAnswer = (s: string): number => {
    let lastWordLength = 0

    for (let i = 0; i < s.length; i++) {
      if (s?.[i - 1] === ' ' && s[i] !== ' ') {
        lastWordLength = 1
        continue
      }

      if (s[i] !== ' ') {
        lastWordLength++
      }
    }

    return lastWordLength
  }

  // beats 100% but uses built in functions
  const anotherAnswer = (s: string): number => {
    const removed = s.split(' ').filter((i) => i)
    return removed[removed.length - 1].length
  }

  // beats 100% without built in functions
  const betterAnswer = (s: string): number => {
    let lastWordLength = 0
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ') {
        if (lastWordLength > 0) return lastWordLength

        continue
      }

      lastWordLength++
    }

    return lastWordLength
  }

  return { myAnswer, anotherAnswer, betterAnswer }
}
