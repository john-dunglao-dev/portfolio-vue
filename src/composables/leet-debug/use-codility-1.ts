export const useCodility1 = () => {
  const myAnswer = (str: string): number => {
    // Implement your solution here
    const mapping: Record<string, number> = {
      B: 1,
      A: 3,
      N: 2,
    }
    const tracking = []

    for (let i = 0; i < str.length; i++) {
      if (mapping[str[i]]) {
        tracking.push(true)
        mapping[str[i]]--
      } else {
        tracking.push(false)
      }
    }

    if (!Object.values(mapping).every((item) => item === 0)) {
      return 0
    }

    let cursor = false
    let counter = 0
    for (const item of tracking) {
      if (cursor && !item) {
        cursor = false
        counter++
      }

      if (!cursor && item) {
        cursor = true
      }
    }

    return counter
  }

  return { myAnswer }
}
