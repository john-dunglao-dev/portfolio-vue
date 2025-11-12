export const use33 = () => {
  // beats 100%
  const myAnswer = (nums: number[], target: number): number => {
    if (nums.length <= 1) {
      return nums?.[0] === target ? 0 : -1
    }

    let i = 0

    while (nums[i] < nums?.[i + 1]) {
      i++
    }

    if (i + 1 !== nums.length) {
      nums = [...nums.slice(i + 1), ...nums.slice(0, i + 1)]
    }

    let left = 0
    let right = nums.length
    let mid = Math.floor((right - left) / 2) + left

    while (left <= right) {
      if (target > nums[mid]) {
        left = mid + 1
      } else if (target < nums[mid]) {
        right = mid - 1
      } else if (!isNaN(nums?.[mid]) && nums[mid] === target) {
        if (i + 1 !== nums.length) {
          return (i + 1 + mid) % nums.length
        }

        return mid
      } else {
        break
      }

      mid = Math.floor((right - left) / 2) + left
    }

    return -1
  }

  return { myAnswer }
}
