export const use18 = () => {
  const myAnswer = (nums: number[], target: number): number[][] => {
    const distinctSum: number[][] = []

    if (nums.length < 4) return distinctSum
    if (nums.length === 4) {
      const sum = nums.reduce((a, b) => a + b, 0)
      if (sum === target) distinctSum.push([...nums])
      return distinctSum
    }

    nums = nums.sort((a, b) => a - b)

    let l = 0,
      r = nums.length - 1

    while (l < r - 2) {
      let a = l + 1,
        b = r - 1
      const average = []

      const sum = nums[l] + nums[r] + nums[a] + nums[b]
      average.push(sum)

      while (a < b) {
        const currentSum = nums[l] + nums[r] + nums[a] + nums[b]

        if (currentSum === target) {
          distinctSum.push([nums[l], nums[a], nums[b], nums[r]])

          while (a < b && nums[a] === nums[a + 1]) a++
          while (a < b && nums[b] === nums[b - 1]) b--

          a++
          b--
        } else if (currentSum < target) {
          a++
        } else {
          b--
        }
      }

      const averageSum = average.reduce((a, b) => a + b, 0) / average.length

      if (averageSum > target) {
        r--
      } else if (averageSum < target) {
        l++
      } else {
        l++
        r--
      }
    }

    return distinctSum.filter((item, index, array) => {
      return (
        array.findIndex(
          (t) => t[0] === item[0] && t[1] === item[1] && t[2] === item[2] && t[3] === item[3]
        ) === index
      )
    })
  }

  return {
    myAnswer,
  }
}
