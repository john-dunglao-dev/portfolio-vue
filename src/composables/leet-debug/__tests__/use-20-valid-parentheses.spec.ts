import { describe, it, expect } from 'vitest'
import { use20 } from '@/composables/leet-debug/use-20'

const testCases = [
  {
    input: '()',
    expected: true,
  },
  {
    input: '()[]{}',
    expected: true,
  },
  {
    input: '(]',
    expected: false,
  },
  {
    input: '([)]',
    expected: false,
  },
  {
    input: '{[]}',
    expected: true,
  },
]

describe('use20 - Valid Parentheses', () => {
  testCases.forEach(({ input, expected }) => {
    it(`validates parentheses for input: "${input}"`, () => {
      const { myAnswer } = use20()
      const result = myAnswer(input)
      expect(result).toBe(expected)
    })
  })
})
