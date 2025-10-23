import { describe, it, expect } from 'vitest'
import { use11RomanToInteger } from '../use-12-roman-to-integer'

describe('use11RomanToInteger', () => {
  const { myAnswer } = use11RomanToInteger()

  it('should convert 1 to I', () => {
    expect(myAnswer(1)).toBe('I')
  })

  it('should convert 4 to IV', () => {
    expect(myAnswer(4)).toBe('IV')
  })

  it('should convert 9 to IX', () => {
    expect(myAnswer(9)).toBe('IX')
  })

  it('should convert 58 to LVIII', () => {
    expect(myAnswer(58)).toBe('LVIII')
  })

  it('should convert 1994 to MCMXCIV', () => {
    expect(myAnswer(1994)).toBe('MCMXCIV')
  })

  it('should convert 3999 to MMMCMXCIX', () => {
    expect(myAnswer(3999)).toBe('MMMCMXCIX')
  })

  it('should return empty string for 0', () => {
    expect(myAnswer(0)).toBe('')
  })

  it('should handle numbers that are exact matches for numerals', () => {
    expect(myAnswer(1000)).toBe('M')
    expect(myAnswer(500)).toBe('D')
    expect(myAnswer(100)).toBe('C')
    expect(myAnswer(50)).toBe('L')
    expect(myAnswer(10)).toBe('X')
    expect(myAnswer(5)).toBe('V')
  })

  it('should handle numbers with multiple same numerals', () => {
    expect(myAnswer(3)).toBe('III')
    expect(myAnswer(20)).toBe('XX')
    expect(myAnswer(30)).toBe('XXX')
  })

  it('should handle edge cases', () => {
    expect(myAnswer(-1)).toBe('')
    expect(myAnswer(NaN)).toBe('')
  })
})
