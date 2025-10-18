import { describe, expect, it } from 'vitest'
import { useZigzagConversion } from '@/composables/leet-debug/use-6-zig-zag-conversion'

describe('useZigzagConversion', () => {
  const { myAnswer } = useZigzagConversion()

  it('should return the correct answer for the given input', () => {
    expect(myAnswer('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    expect(myAnswer('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    expect(myAnswer('A', 1)).toBe('A')
    expect(myAnswer('AB', 1)).toBe('AB')
    expect(myAnswer('ABC', 2)).toBe('ACB')
    expect(myAnswer('ABCDE', 4)).toBe('ABCED')
    expect(myAnswer('ABCDE', 5)).toBe('ABCDE')
    expect(myAnswer('ABCDE', 6)).toBe('ABCDE')
  })
})
