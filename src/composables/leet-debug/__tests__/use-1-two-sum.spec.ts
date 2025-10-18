import { describe, it, expect } from 'vitest'
import { useTwoSum } from '@/composables/leet-debug/use-1-two-sum'

describe('useTwoSum', () => {
  const { solution } = useTwoSum()

  describe('Basic functionality', () => {
    it('should return correct indices for a valid two sum', () => {
      const nums = [2, 7, 11, 15]
      const target = 9
      const result = solution(nums, target)

      expect(result).toEqual([0, 1])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should return correct indices when solution is at the end', () => {
      const nums = [3, 2, 4]
      const target = 6
      const result = solution(nums, target)

      expect(result).toEqual([1, 2])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with same numbers at different indices', () => {
      const nums = [3, 3]
      const target = 6
      const result = solution(nums, target)

      expect(result).toEqual([0, 1])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })
  })

  describe('Edge cases', () => {
    it('should return null when no solution exists', () => {
      const nums = [1, 2, 3]
      const target = 7
      const result = solution(nums, target)

      expect(result).toBeNull()
    })

    it('should work with negative numbers', () => {
      const nums = [-1, -2, -3, -4, -5]
      const target = -8
      const result = solution(nums, target)

      expect(result).toEqual([2, 4])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with mixed positive and negative numbers', () => {
      const nums = [-3, 4, 3, 90]
      const target = 0
      const result = solution(nums, target)

      expect(result).toEqual([0, 2])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with zero as target', () => {
      const nums = [0, 4, 3, 0]
      const target = 0
      const result = solution(nums, target)

      expect(result).toEqual([0, 3])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with zero in the array', () => {
      const nums = [1, 0, -1]
      const target = -1
      const result = solution(nums, target)

      expect(result).toEqual([1, 2])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should return null for empty array', () => {
      const nums: number[] = []
      const target = 5
      const result = solution(nums, target)

      expect(result).toBeNull()
    })

    it('should return null for single element array', () => {
      const nums = [5]
      const target = 5
      const result = solution(nums, target)

      expect(result).toBeNull()
    })

    it('should return null when target cannot be formed with single element twice', () => {
      const nums = [5]
      const target = 10
      const result = solution(nums, target)

      expect(result).toBeNull()
    })
  })

  describe('Large numbers and arrays', () => {
    it('should work with large numbers', () => {
      const nums = [1000000, 2000000, 3000000]
      const target = 3000000
      const result = solution(nums, target)

      expect(result).toEqual([0, 1])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with larger arrays', () => {
      const nums = [1, 5, 3, 7, 10, 2, 4, 6, 8]
      const target = 17
      const result = solution(nums, target)

      expect(result).toEqual([3, 4]) // 7 + 10 = 17 (unique solution)
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with larger arrays with unique solution', () => {
      const nums = [1, 6, 3, 7, 9, 2, 4, 8]
      const target = 11
      const result = solution(nums, target)

      // Only 2 + 9 = 11. Algorithm processes: 1,6,3,7,9(finds complement 2 not in dict),2(finds complement 9 in dict at index 4)
      expect(result).toEqual([4, 5])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })
  })

  describe('Duplicate numbers', () => {
    it('should handle duplicates correctly when they are part of solution', () => {
      const nums = [2, 5, 5, 11]
      const target = 10
      const result = solution(nums, target)

      expect(result).toEqual([1, 2])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should handle duplicates when they are not part of solution', () => {
      const nums = [1, 1, 2, 5]
      const target = 7
      const result = solution(nums, target)

      expect(result).toEqual([2, 3]) // 2 + 5 = 7 (unique solution)
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })

    it('should work with multiple duplicates', () => {
      const nums = [3, 3, 3, 3, 4]
      const target = 7
      const result = solution(nums, target)

      expect(result).toEqual([0, 4])
      expect(nums[result![0]] + nums[result![1]]).toBe(target)
    })
  })

  describe('Return value validation', () => {
    it('should always return indices in ascending order', () => {
      const nums = [15, 2, 7, 11]
      const target = 17
      const result = solution(nums, target)

      expect(result).toEqual([0, 1]) // 15 + 2 = 17, algorithm finds complement of 15 (which is 2) at index 1
      expect(result![0]).toBeLessThan(result![1])
    })

    it('should return valid indices within array bounds', () => {
      const nums = [1, 2, 3, 4, 5]
      const target = 9
      const result = solution(nums, target)

      expect(result).toEqual([3, 4])
      expect(result![0]).toBeGreaterThanOrEqual(0)
      expect(result![1]).toBeGreaterThanOrEqual(0)
      expect(result![0]).toBeLessThan(nums.length)
      expect(result![1]).toBeLessThan(nums.length)
    })

    it('should never return the same index twice', () => {
      const nums = [5, 3, 2, 4]
      const target = 6
      const result = solution(nums, target)

      expect(result).toEqual([2, 3]) // 2 + 4 = 6 (unique solution)
      expect(result![0]).not.toBe(result![1])
    })
  })
})
