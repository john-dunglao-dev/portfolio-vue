import { describe, expect, it } from 'vitest'
import { useAddTwoNumbers } from '@/composables/leet-debug/use-2-add-two-numbers'

describe('useAddTwoNumbers', () => {
  const { myAnswer, solution, stringToReversedListNode } = useAddTwoNumbers()

  describe('Basic functionality', () => {
    it('should correctly add two numbers represented by linked lists', () => {
      const l1 = stringToReversedListNode('243')
      const l2 = stringToReversedListNode('564')

      const result = myAnswer(l1, l2)
      expect(result).toEqual(stringToReversedListNode('708'))

      const correctSolution = solution(l1, l2)
      expect(correctSolution).toEqual(stringToReversedListNode('708'))
    })

    it('should handle carry over correctly', () => {
      const l1 = stringToReversedListNode('9999999')
      const l2 = stringToReversedListNode('9999')

      const result = myAnswer(l1, l2)
      expect(result).toEqual(stringToReversedListNode('89990001'))

      const correctSolution = solution(l1, l2)
      expect(correctSolution).toEqual(stringToReversedListNode('89990001'))
    })

    it('should return zero when both inputs are zero', () => {
      const l1 = stringToReversedListNode('0')
      const l2 = stringToReversedListNode('0')

      const result = myAnswer(l1, l2)
      expect(result).toEqual(stringToReversedListNode('0'))

      const correctSolution = solution(l1, l2)
      expect(correctSolution).toEqual(stringToReversedListNode('0'))
    })

    it('should handle big numbers correctly', () => {
      const l1 = stringToReversedListNode('1000000000000000000000000000001')
      const l2 = stringToReversedListNode('564')

      const result = myAnswer(l1, l2)
      expect(result).toEqual(stringToReversedListNode('6640000000000000000000000000001'))

      const correctSolution = solution(l1, l2)
      expect(correctSolution).toEqual(stringToReversedListNode('6640000000000000000000000000001'))
    })
  })
})
