import { describe, it, expect } from 'vitest'
import { useFindMedianSortedArrays } from '@/composables/leet-debug/use-4-find-median-sorted-arrays'

const { myAnswer, solution } = useFindMedianSortedArrays()

describe('useFindMedianSortedArrays', () => {
  const testCases: Array<{
    nums1: number[]
    nums2: number[]
    expected: number
    description: string
  }> = [
    {
      nums1: [1, 3],
      nums2: [2],
      expected: 2,
      description: 'Odd total length, median is middle element',
    },
    {
      nums1: [1, 2],
      nums2: [3, 4],
      expected: 2.5,
      description: 'Even total length, median is average of two middle elements',
    },
    {
      nums1: [],
      nums2: [1],
      expected: 1,
      description: 'First array empty',
    },
    {
      nums1: [2],
      nums2: [],
      expected: 2,
      description: 'Second array empty',
    },
    {
      nums1: [0, 0],
      nums2: [0, 0],
      expected: 0,
      description: 'All elements are zero',
    },
    {
      nums1: [1, 2, 3],
      nums2: [4, 5, 6],
      expected: 3.5,
      description: 'Both arrays sorted, even total length',
    },
    {
      nums1: [1, 2, 3, 4, 5],
      nums2: [6, 7, 8, 9, 10],
      expected: 5.5,
      description: 'Both arrays sorted, even total length, larger arrays',
    },
    {
      nums1: [1, 3, 5],
      nums2: [2, 4, 6],
      expected: 3.5,
      description: 'Interleaved arrays',
    },
    {
      nums1: [1],
      nums2: [2, 3, 4, 5, 6],
      expected: 3.5,
      description: 'One array much smaller',
    },
    {
      nums1: [],
      nums2: [],
      expected: NaN,
      description: 'Both arrays empty',
    },
    {
      nums1: Array.from({ length: 10000 }, (_, i) => i + 1),
      nums2: Array.from({ length: 10000 }, (_, i) => i + 10001),
      expected: 10000.5,
      description: 'Large arrays, consecutive numbers',
    },
    {
      nums1: Array.from({ length: 5000 }, (_, i) => i * 2),
      nums2: Array.from({ length: 5000 }, (_, i) => i * 2 + 1),
      expected: 4999.5,
      description: 'Large arrays, interleaved even and odd numbers',
    },
  ]

  testCases.forEach(({ nums1, nums2, expected, description }) => {
    it(`myAnswer: ${description}`, () => {
      expect(myAnswer(nums1, nums2)).toEqual(expected)
    })
    it(`solution: ${description}`, () => {
      expect(solution(nums1, nums2)).toEqual(expected)
    })
  })
})
