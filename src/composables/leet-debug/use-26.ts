export const use26 = () => {
  // beat 5%
  const myAnswer = (nums: number[]): number => {
    const mapping: Record<number, boolean> = {}
    let duplicates = 0
    let i = 0

    while (i < nums.length) {
      mapping[nums[i]] = mapping?.[nums[i]] === undefined ? false : true

      if (mapping[nums[i]]) {
        duplicates++
        nums.splice(i, 1)
        continue
      }

      i++
    }

    nums.push(...Array(duplicates).fill('_'))

    return nums.length - duplicates
  }

  const solution = (nums: number[]): number => {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[k] !== nums[i]) {
        nums[k + 1] = nums[i]
        k++
      }
    }

    return k
  }

  return {
    myAnswer,
    solution,
  }
}
