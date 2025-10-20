import { describe, expect, it } from 'vitest'
import { use9PalindromeNumber } from '@/composables/leet-debug/use-9-palindrome-number'

describe('use9PalindromeNumber', () => {
  const { myAnswer } = use9PalindromeNumber()

  it('should return true for palindrome numbers', () => {
    expect(myAnswer(121)).toBe(true)
    expect(myAnswer(-121)).toBe(false)
    expect(myAnswer(10)).toBe(false)
  })

  it('should return false for non-palindrome numbers', () => {
    expect(myAnswer(123)).toBe(false)
    expect(myAnswer(12321)).toBe(true)
  })

  describe('solution', () => {
    const { solution } = use9PalindromeNumber()

    it('should return true for palindrome numbers', () => {
      expect(solution(121)).toBe(true)
      expect(solution(-121)).toBe(false)
      expect(solution(10)).toBe(false)
    })

    it('should return false for non-palindrome numbers', () => {
      expect(solution(123)).toBe(false)
      expect(solution(12321)).toBe(true)
    })
  })
})
