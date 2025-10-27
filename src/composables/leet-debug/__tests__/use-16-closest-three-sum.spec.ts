import { describe, expect, it } from 'vitest'
import { use16 } from '@/composables/leet-debug/use-16'

const testCases = [
  {
    input: { nums: [-1, 2, 1, -4], target: 1 },
    expected: 2,
  },
  {
    input: { nums: [0, 0, 0], target: 1 },
    expected: 0,
  },
  {
    input: { nums: [1, 1, 1, 0], target: -100 },
    expected: 2,
  },
  {
    input: { nums: [1, 2, 5, 10, 11], target: 12 },
    expected: 13,
  },
]

describe('use16ClosestThreeSum', () => {
  describe('myAnswer', () => {
    const { myAnswer } = use16()

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
        const result = myAnswer(input.nums, input.target)
        expect(result).toBe(expected)
      })
    })
  })
})
