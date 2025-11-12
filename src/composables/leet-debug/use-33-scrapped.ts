export const use33 = () => {
  const myAnswer = (nums: number[], target: number): number => {
    if (nums.length === 1) {
      return target === nums[0] ? 0 : -1
    }

    let i = 0
    let min = null

    while (true) {
      if (!min || nums[i] < min) {
        min = nums[i]
      }

      if (min !== nums[i]) {
        break
      }

      i++
    }

    const groupingLength = i + 1
    const groups = Math.ceil(nums.length / groupingLength)
    let leftGroup = 0
    let rightGroup = groups
    let midGroup = Math.floor(groups / 2)

    while (leftGroup > rightGroup) {
      const max = leftGroup * groupingLength
      const min = max + groupingLength

      if (target < nums[min]) {
        rightGroup = midGroup - 1
      } else if (target > nums[max]) {
        leftGroup = midGroup + 1
      } else {
        for (let j = 0; j < groupingLength; j++) {
          if (nums[j + max] === target) {
            return j + max
          }
        }
      }

      midGroup = Math.floor((rightGroup - leftGroup) / 2) + leftGroup
    }

    return -1
  }

  return { myAnswer }
}
