export const use35 = () => {
  // failed
  const searchInsertRecursion = (nums: number[], target: number): number => {
    const median = Math.floor(nums.length / 2)

    if (target === nums[median]) {
      return median
    }

    if (nums.length <= 1) {
      return nums?.[0] > target ? median - 1 : median + 1
    }

    if (nums[median] < target) {
      return searchInsertRecursion(nums.slice(0, median - 1), target)
    }

    return median + searchInsertRecursion(nums.slice(median + 1), target)
  }

  // beats 100%????
  const searchInsert = (nums: number[], target: number): number => {
    let left = 0
    let right = nums.length
    let mid = Math.floor((right - left) / 2) + left

    while (left <= right) {
      if (nums[mid] === target) {
        return mid
      }

      if (left === right) {
        if (target > nums[mid]) {
          return mid + 1
        }

        return mid
      }

      if (target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }

      mid = Math.floor((right - left) / 2) + left
    }

    if (target > nums[mid]) {
      return mid + 1
    }

    return mid - 1 < 0 ? 0 : mid - 1
  }

  const myAnswer = (nums: number[], target: number): number => {
    return searchInsert(nums, target)
  }

  return {
    myAnswer,
  }
}
