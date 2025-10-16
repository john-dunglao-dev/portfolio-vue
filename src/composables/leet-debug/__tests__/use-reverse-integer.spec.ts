import { describe, it, expect } from 'vitest'
import { useReverseInteger } from '../use-reverse-integer'

describe('useReverseInteger', () => {
  const { myAnswer } = useReverseInteger()

  it('should reverse a positive integer', () => {
    expect(myAnswer(123)).toBe(321)
  })

  it('should reverse a negative integer', () => {
    expect(myAnswer(-123)).toBe(-321)
  })

  it('should handle integer ending with zero', () => {
    expect(myAnswer(120)).toBe(21)
  })

  it('should return 0 for reversed integer out of 32-bit range (positive)', () => {
    expect(myAnswer(1534236469)).toBe(0)
  })

  it('should return 0 for reversed integer out of 32-bit range (negative)', () => {
    expect(myAnswer(-1534236469)).toBe(0)
  })

  it('should handle zero', () => {
    expect(myAnswer(0)).toBe(0)
  })

  it('should handle single digit positive', () => {
    expect(myAnswer(7)).toBe(7)
  })

  it('should handle single digit negative', () => {
    expect(myAnswer(-8)).toBe(-8)
  })

  it('should handle max 32-bit signed integer', () => {
    expect(myAnswer(2147483647)).toBe(0)
  })

  it('should handle min 32-bit signed integer', () => {
    expect(myAnswer(-2147483648)).toBe(0)
  })
})
