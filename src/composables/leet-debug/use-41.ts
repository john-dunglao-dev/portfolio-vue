export const use41 = () => {
  // beats 46.30% runtime and 41.98% memory
  const myAnswer = (nums: number[]): number => {
    const arr = []

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 1) continue

      arr[nums[i]] = true
    }

    let j = 1
    while (arr[j]) {
      j++
    }

    return j
  }

  // solution from Fabian Letsch in leetcode solutions
  const solution = (nums: number[]): number => {
    let i = 0

    while (i < nums.length) {
      const correctIndex = nums[i] - 1

      if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIndex]) {
        ;[nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]]
        continue
      }

      i++
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1
      }
    }

    return nums.length + 1
  }

  return { myAnswer, solution }
}
