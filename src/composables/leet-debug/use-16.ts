export const use16 = () => {
  // beats 94.59%
  const myAnswer = (nums: number[], target: number): number => {
    const arranged = nums.sort((a, b) => a - b)
    let closestSum = Infinity

    for (let i = 0; i < arranged.length; i++) {
      if (i > 0 && arranged[i] === arranged[i - 1]) continue // Skip duplicates for the first element

      let l = i + 1
      let r = arranged.length - 1

      while (l < r) {
        const sum = arranged[i] + arranged[l] + arranged[r]
        const diff = Math.abs(target - sum)

        if (diff === 0) {
          return sum // Exact match found
        } else if (sum > target) {
          r--
        } else {
          l++
        }

        if (Math.abs(target - closestSum) > diff) {
          closestSum = sum
        }
      }
    }

    return closestSum
  }

  return {
    myAnswer,
  }
}
