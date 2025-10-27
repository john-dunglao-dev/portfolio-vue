import { describe, expect, it, test } from 'vitest'
import { use15 } from '@/composables/leet-debug/use-15'

const testCases = [
  {
    input: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    input: [0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    input: [1, 2, -2, -1],
    expected: [],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [0],
    expected: [],
  },
  {
    input: [0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    input: [-100, -70, -60, 110, 120, 130, 160],
    expected: [
      [-100, -60, 160],
      [-70, -60, 130],
    ],
  },
  {
    input: [-2, 0, 1, 1, 2],
    expected: [
      [-2, 0, 2],
      [-2, 1, 1],
    ],
  },
]

describe('use15', () => {
  describe('myAnswer', () => {
    const { myAnswer } = use15()

    testCases.forEach(({ input, expected }, index) => {
      test.skip(`should return correct triplets for test case #${index + 1}`, () => {
        const result = myAnswer(input)
        expect(result).toEqual(expected)
      })
    })
  })

  describe('kimAnswer', () => {
    const { kimAnswer } = use15()

    testCases.forEach(({ input, expected }, index) => {
      it(`should return correct triplets for test case #${index + 1}`, () => {
        const result = kimAnswer(input)
        expect(result).toEqual(expected)
      })
    })
  })
})
