export const use15 = () => {
  const myAnswer = (nums: number[]): Array<number[]> => {
    console.debug('--- Debug Info ---')
    console.debug('Input nums:', nums)

    if (nums.length < 3) return []
    if (nums.length === 3) {
      if (nums[0] + nums[1] + nums[2] === 0) {
        return [[nums[0], nums[1], nums[2]]]
      } else {
        return []
      }
    }

    const results: Record<number, Array<number[]>> = {}
    const arranged = nums.sort((a, b) => a - b)
    let l = 0,
      r = arranged.length - 1,
      mid = 1
    console.debug('Sorted nums:', arranged)

    while (l < r - 1) {
      const willAverage = []

      for (mid = l + 1; mid < r; mid++) {
        const sum = arranged[l] + arranged[r] + arranged[mid]
        willAverage.push(sum)
        console.debug(`l:${l}, mid:${mid}, r:${r}, sum:${sum}`)

        if (results?.[sum] === undefined) {
          results[sum] = [[arranged[l], arranged[mid], arranged[r]]]
        } else {
          results[sum].push([arranged[l], arranged[mid], arranged[r]])
        }
      }

      const average = willAverage.reduce((a, b) => a + b, 0) / willAverage.length
      console.debug('average', average)

      if (average > 0) {
        r--
        console.debug('moved r to', r)
      } else {
        l++
        console.debug('moved l to', l)
      }
    }

    return results[0]
      ? results[0].filter((item, index, array) => {
          return (
            array.findIndex((t) => t[0] === item[0] && t[1] === item[1] && t[2] === item[2]) ===
            index
          )
        })
      : []
  }

  const kimAnswer = (nums: number[]): Array<number[]> => {
    const results: Record<number, Array<number[]>> = {}
    const arranged = nums.sort((a, b) => a - b)

    for (let i = 0; i < arranged.length; i++) {
      if (i > 0 && arranged[i] === arranged[i - 1]) continue // Skip duplicates for the first element

      let l = i + 1
      let r = arranged.length - 1

      while (l < r) {
        const sum = arranged[i] + arranged[l] + arranged[r]

        if (sum === 0) {
          if (results?.[sum] === undefined) {
            results[sum] = [[arranged[i], arranged[l], arranged[r]]]
          } else {
            results[sum].push([arranged[i], arranged[l], arranged[r]])
          }
          l++
          r--
        } else if (sum > 0) {
          r--
        } else {
          l++
        }
      }
    }

    return results[0]
      ? results[0].filter((item, index, array) => {
          return (
            array.findIndex((t) => t[0] === item[0] && t[1] === item[1] && t[2] === item[2]) ===
            index
          )
        })
      : []
  }

  return { myAnswer, kimAnswer }
}
