import { describe, expect, it } from 'vitest'
import { use19 } from '@/composables/leet-debug/use-19'

const { myAnswer, arrayToLinkedList, linkedListToArray, answerUsingListNode } = use19()

const testCases = [
  {
    input: {
      head: arrayToLinkedList([1, 2, 3, 4, 5]),
      n: 2,
    },
    expected: [1, 2, 3, 5],
  },
  {
    input: {
      head: arrayToLinkedList([1]),
      n: 1,
    },
    expected: [],
  },
  {
    input: {
      head: arrayToLinkedList([1, 2]),
      n: 1,
    },
    expected: [1],
  },
  {
    input: {
      head: arrayToLinkedList([1, 2]),
      n: 2,
    },
    expected: [2],
  },
]

describe('useRemoveNthNodeFromEndOfList', () => {
  testCases.forEach(({ input, expected }) => {
    it(`removes the ${input.n}th node from the end`, () => {
      const result = linkedListToArray(myAnswer(input.head, input.n))
      expect(result).toEqual(expected)
    })

    it(`correctly removes the ${input.n}th node from the end using ListNode method`, () => {
      const result = linkedListToArray(answerUsingListNode(input.head, input.n))
      expect(result).toEqual(expected)
    })
  })
})
