export const use14LongestCommonPrefix = () => {
  // beats 40.17% (myAnswer)
  const myAnswer = (strs: string[]): string => {
    console.debug('--- Debug Info ---')
    console.debug('Input strings:', strs)

    if (strs.length === 0 || strs.some((s) => s.length === 0)) return ''

    const firstStr = strs[0]
    const firstStrLen = firstStr.length
    let longest = ''

    console.debug('First string to compare prefixes:', firstStr)

    for (let i = 1; i <= firstStrLen; i++) {
      const currentPrefix = firstStr.slice(0, i)

      console.debug(`Checking prefix: '${currentPrefix}'`)
      console.debug('Strings to compare:', strs)

      if (strs.every((s) => s.slice(0, i) === currentPrefix)) {
        longest = currentPrefix
      } else {
        break
      }
    }

    return longest
  }

  // beats 63.85% (anotherAnswer)
  // using .every() beats 100%
  const anotherAnswer = (strs: string[]): string => {
    if (strs.length === 0) return ''

    const first = strs[0]
    const firstLen = first.length

    if (firstLen === 0) return ''

    for (let i = 0; i < firstLen; i++) {
      const char = first[i]

      // for (let j = 1; j < strs.length; j++) {
      //   if (strs?.[j]?.[i] !== char) {
      //     return first.slice(0, i)
      //   }
      // }

      if (!strs.every((item) => item?.[i] === char)) {
        return first.slice(0, i)
      }
    }

    return first
  }

  return {
    myAnswer,
    anotherAnswer,
  }
}
