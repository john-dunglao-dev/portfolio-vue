import { describe, expect, it } from 'vitest'
import { useLengthOfLongestSubstring } from '@/composables/leet-debug/use-3-length-of-longest-substring'

describe('useLengthOfLongestSubstring', () => {
  const { myAnswer, solution } = useLengthOfLongestSubstring()

  describe('basic tests', () => {
    it('should pass basic tests', () => {
      expect(myAnswer('abcabcbb')).toBe(3)
      expect(myAnswer('bbbbb')).toBe(1)
      expect(myAnswer('pwwkew')).toBe(3)
      expect(myAnswer('')).toBe(0)
      expect(myAnswer(' ')).toBe(1)
      expect(myAnswer('au')).toBe(2)
      expect(myAnswer('dvdf')).toBe(3)
    })

    it('should pass extra tests', () => {
      expect(myAnswer('anviaj')).toBe(5)
      expect(myAnswer('tmmzuxt')).toBe(5)
      expect(myAnswer('ohvhjdml')).toBe(6)
      expect(myAnswer('aabaab!bb')).toBe(3)
      expect(myAnswer('ckilbkd')).toBe(5)
      expect(myAnswer('abba')).toBe(2)
    })

    it('should pass basic tests with solution', () => {
      expect(solution('abcabcbb')).toBe(3)
      expect(solution('bbbbb')).toBe(1)
      expect(solution('pwwkew')).toBe(3)
      expect(solution('')).toBe(0)
      expect(solution(' ')).toBe(1)
      expect(solution('au')).toBe(2)
      expect(solution('dvdf')).toBe(3)
    })

    it('should pass extra tests with solution', () => {
      expect(solution('anviaj')).toBe(5)
      expect(solution('tmmzuxt')).toBe(5)
      expect(solution('ohvhjdml')).toBe(6)
      expect(solution('aabaab!bb')).toBe(3)
      expect(solution('ckilbkd')).toBe(5)
      expect(solution('abba')).toBe(2)
    })
  })
})
