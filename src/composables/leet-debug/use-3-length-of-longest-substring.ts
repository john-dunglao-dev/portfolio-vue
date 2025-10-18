export const useLengthOfLongestSubstring = () => {
  const myAnswer = (s: string) => {
    let check: Record<string, boolean> = {}
    let max = 0
    let counter = 0
    let started = 0

    console.debug('----------------------------------')
    console.debug('input string', s)

    for (let i = 0; i < s.length; i++) {
      const char = s[i]

      if (check[char]) {
        console.debug('resetting counter', char, 'index', i)

        check = {}
        counter = 0
        started++
        i = started - 1

        console.debug('start in ', i + 1)
        continue
      }

      console.debug('adding char', char, 'index', i)

      check[char] = true
      counter++
      if (counter > max) {
        max = counter

        console.debug('updating max', max)
      }
    }

    return max
  }

  const solution = (s: string) => {
    const arr = new Array(128).fill(false)
    let l = 0,
      r = 0,
      maxLen = 0

    while (r < s.length) {
      if (!arr[s.charCodeAt(r)]) {
        arr[s.charCodeAt(r)] = true
        maxLen = Math.max(maxLen, r - l + 1)
        r++
      } else {
        arr[s.charCodeAt(l)] = false
        l++
      }
    }
    return maxLen
  }

  return {
    myAnswer,
    solution,
  }
}
