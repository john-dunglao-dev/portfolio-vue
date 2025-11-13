export const use71 = () => {
  // beats 90.8%
  const myAnswer = (path: string): string => {
    const splitted = path.split('/')
    const result = []

    for (let i = 0; i < splitted.length; i++) {
      // apparently, switch case is slower than if-else
      if (splitted[i] === '.') {
        if (i === 0) {
          result.push(splitted[i])
        }
        continue
      } else if (splitted[i] === '..') {
        result.pop()
        continue
      }

      if (splitted[i]) {
        result.push(splitted[i])
      }
    }

    return '/' + result.join('/')
  }

  return { myAnswer }
}
