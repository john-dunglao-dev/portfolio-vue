export const use28 = () => {
  // beats 100%
  const myAnswer = (haystack: string, needle: string): number => {
    if (!needle) return -1
    if (haystack === needle) return 0

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break
        } else if (j === needle.length - 1) {
          return i
        }
      }
    }

    return -1
  }

  return { myAnswer }
}
