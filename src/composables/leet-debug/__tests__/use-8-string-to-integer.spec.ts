import { describe, it, expect } from 'vitest'
import { useReverseInteger } from '@/composables/leet-debug/use-8-string-to-integer'

describe('use8.myAnswer', () => {
  const { myAnswer } = useReverseInteger()

  it('parses positive integer', () => {
    expect(myAnswer('42')).toBe(42)
  })

  it('parses negative integer', () => {
    expect(myAnswer('-42')).toBe(-42)
  })

  it('parses integer with leading spaces', () => {
    expect(myAnswer('   123')).toBe(123)
  })

  it('parses integer with trailing spaces', () => {
    expect(myAnswer('123   ')).toBe(123)
  })

  it('parses integer with plus sign', () => {
    expect(myAnswer('+99')).toBe(99)
  })

  it('returns 0 for non-numeric string', () => {
    expect(myAnswer('abc')).toBe(0)
  })

  it('parses integer from string with letters after number', () => {
    expect(myAnswer('4193 with words')).toBe(4193)
  })

  it('returns 0 for string with only spaces', () => {
    expect(myAnswer('    ')).toBe(0)
  })

  it('returns 0 for string with only sign', () => {
    expect(myAnswer('+')).toBe(0)
    expect(myAnswer('-')).toBe(0)
  })

  it('clamps to 32-bit signed integer max', () => {
    expect(myAnswer('2147483648')).toBe(2147483647)
  })

  it('clamps to 32-bit signed integer min', () => {
    expect(myAnswer('-2147483649')).toBe(-2147483648)
  })

  it('parses number with multiple signs', () => {
    expect(myAnswer('++123')).toBe(0)
    expect(myAnswer('--123')).toBe(0)
    expect(myAnswer('+-123')).toBe(0)
    expect(myAnswer('-+123')).toBe(0)
  })

  it('parses number with decimal point', () => {
    expect(myAnswer('3.14')).toBe(3)
  })

  it('parses number with leading zeros', () => {
    expect(myAnswer('0000123')).toBe(123)
  })

  it('parses empty string', () => {
    expect(myAnswer('')).toBe(0)
  })

  it('parses string with mixed whitespace and signs', () => {
    expect(myAnswer('   -0012a42')).toBe(-12)
  })
})
