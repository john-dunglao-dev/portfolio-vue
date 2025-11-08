export const use27 = () => {
  const myAnswer = (nums: number[], val: number): number => {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
      if (val !== nums[i]) {
        nums[k] = nums[i]
        k++
      }
    }

    return k
  }

  return {
    myAnswer,
  }
}
