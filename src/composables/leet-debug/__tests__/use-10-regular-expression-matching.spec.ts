import { describe, expect, it } from 'vitest'
import { use10 } from '@/composables/leet-debug/use-10-regular-expression-matching'

describe('use10', () => {
  const { solution } = use10()

  it('should work', () => {
    expect(solution('aa', 'a')).toBe(false)
    expect(solution('aa', 'a*')).toBe(true)
    expect(solution('ab', '.*')).toBe(true)
    expect(solution('aab', 'c*a*b')).toBe(true)
    expect(solution('mississippi', 'mis*is*p*.')).toBe(false)
    expect(solution('ab', '.*c')).toBe(false)
    expect(solution('a', 'ab*a')).toBe(false)
    expect(solution('aa', 'ab*a')).toBe(true)
    expect(solution('aaa', 'a*a')).toBe(true)
    expect(solution('aaa', 'ab*a*c*a')).toBe(true)
  })
})
