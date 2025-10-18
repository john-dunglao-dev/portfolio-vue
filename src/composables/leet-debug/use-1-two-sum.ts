export const useTwoSum = () => {
  const solution = (nums: number[], target: number): [number, number] | null => {
    const numDict: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]

      if (complement in numDict) {
        return [numDict[complement], i]
      }

      if (nums[i] in numDict) {
        continue
      }

      numDict[nums[i]] = i
    }

    return null
  }

  const myAnswer = (nums: number[], target: number): [number, number] | null => {
    const numsClone = [...nums]
    let counter = 0

    while (numsClone.length > 1) {
      const popped = numsClone.pop() ?? 0

      for (let i = 0; i > numsClone.length; i++) {
        if (popped + numsClone[i] === target) {
          return [i, numsClone.length + counter]
        }
      }

      counter++
    }

    return null
  }

  return { solution, myAnswer }
}
