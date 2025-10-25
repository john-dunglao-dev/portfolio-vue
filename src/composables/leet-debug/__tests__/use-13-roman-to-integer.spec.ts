import { describe, it, expect } from 'vitest'
import { use13RomanToInteger } from '@/composables/leet-debug/use-13-roman-to-integer'

const testCases = [
  // Basic numerals
  { input: 'I', expected: 1 },
  { input: 'V', expected: 5 },
  { input: 'X', expected: 10 },
  { input: 'L', expected: 50 },
  { input: 'C', expected: 100 },
  { input: 'D', expected: 500 },
  { input: 'M', expected: 1000 },

  // Simple combinations
  { input: 'II', expected: 2 },
  { input: 'III', expected: 3 },
  { input: 'VI', expected: 6 },
  { input: 'VII', expected: 7 },
  { input: 'VIII', expected: 8 },

  // Subtractive notation
  { input: 'IV', expected: 4 },
  { input: 'IX', expected: 9 },
  { input: 'XL', expected: 40 },
  { input: 'XC', expected: 90 },
  { input: 'CD', expected: 400 },
  { input: 'CM', expected: 900 },

  // Complex numbers
  { input: 'XIV', expected: 14 },
  { input: 'XXIX', expected: 29 },
  { input: 'XLIV', expected: 44 },
  { input: 'XCIX', expected: 99 },
  { input: 'CXLVIII', expected: 148 },
  { input: 'MMXXIV', expected: 2024 },

  // Edge cases
  { input: '', expected: 0 },
  { input: 'MMMM', expected: 4000 },
]

describe('use-13-roman-to-integer', () => {
  const { myAnswer, anotherAnswer, solution } = use13RomanToInteger()

  describe('myAnswer', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should convert ${input} to ${expected}`, () => {
        expect(myAnswer(input)).toBe(expected)
      })
    })
  })

  describe('myAnotherAnswer', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should convert ${input} to ${expected}`, () => {
        expect(anotherAnswer(input)).toBe(expected)
      })
    })
  })

  describe('solution', () => {
    testCases.forEach(({ input, expected }) => {
      it(`should convert ${input} to ${expected}`, () => {
        expect(solution(input)).toBe(expected)
      })
    })
  })
})
