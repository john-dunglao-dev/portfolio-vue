export const use20 = () => {
  const myAnswer = (s: string): boolean => {
    const mapper: Record<string, string> = {
      '(': ')',
      '{': '}',
      '[': ']',
    }
    const stack: string[] = []

    for (const char of s) {
      if (mapper[char]) {
        stack.push(mapper[char])
      } else if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop()
      } else {
        return false
      }
    }

    return stack.length === 0
  }

  return { myAnswer }
}
