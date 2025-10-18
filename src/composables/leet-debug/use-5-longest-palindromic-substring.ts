export const useLongestPalindromicSubstring = () => {
  const getMedian = (s: string): number => {
    console.debug('calculating median for', s)
    console.debug('length', s.length)
    return Math.floor(s.length / 2)
  }

  const isCheck = (s: string): boolean => {
    if (s.length <= 1) return true
    const median = getMedian(s)

    if (s[0] !== s?.[s.length - 1]) return false

    console.debug('checking if ' + s + ' is a palindrome')
    console.debug('median', median)

    const skip = s.length % 2 === 0 ? 0 : 1
    const first = s.slice(0, median)
    const second = s
      .slice(median + skip)
      .split('')
      .reverse()
      .join('')

    console.debug('first', first)
    console.debug('second', second)
    console.debug('is palindrome?', first === second)

    return first === second
  }

  const myAnswer = (s: string): string => {
    if (!s.length) return s

    let maxString = ''

    for (let l = 0; l < s.length; l++) {
      let r = s.length
      let found = false

      while (r >= l && !found) {
        const sub = s.slice(l, r)

        console.debug('checking substring', sub, 'from', l, 'to', r)

        if (isCheck(sub)) {
          found = true
          console.debug('found palindrome', sub)

          if (sub.length > maxString.length) {
            maxString = sub

            console.debug('updating maxString', maxString)
          }

          console.debug('breaking out of inner loop')

          break
        }

        r--
      }
    }

    return maxString
  }

  const solution = (s: string): string => {
    if (!s.length) return s

    let start = 0
    let end = 0

    const expandAroundCenter = (left: number, right: number): number => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
      }
      return right - left - 1
    }

    for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(i, i)
      const len2 = expandAroundCenter(i, i + 1)
      const len = Math.max(len1, len2)

      if (len > end - start) {
        start = i - Math.floor((len - 1) / 2)
        end = i + Math.floor(len / 2)
      }
    }

    return s.slice(start, end + 1)
  }

  return { myAnswer, getMedian, solution }
}
