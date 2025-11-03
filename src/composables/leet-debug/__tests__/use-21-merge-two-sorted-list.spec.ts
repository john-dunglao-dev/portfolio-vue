import { describe, expect, test } from 'vitest'
import { use21 } from '../use-21'
import { useLinkedList } from '@/composables/leet-debug/use-linked-list'

const testCases = [
  {
    input: {
      list1: [1, 2, 4],
      list2: [1, 3, 4],
    },
    output: [1, 1, 2, 3, 4, 4],
  },
  {
    input: {
      list1: [],
      list2: [],
    },
    output: [],
  },
  {
    input: {
      list1: [],
      list2: [0],
    },
    output: [0],
  },
]

describe('use-21-merge-two-sorted-list', () => {
  const { arrayToLinkedList, linkedListToArray } = useLinkedList()

  test.each(testCases)('merges %o', ({ input, output }) => {
    const { myAnswer } = use21()
    const result = myAnswer(arrayToLinkedList(input.list1), arrayToLinkedList(input.list2))
    expect(linkedListToArray(result)).toEqual(output)
  })
})
