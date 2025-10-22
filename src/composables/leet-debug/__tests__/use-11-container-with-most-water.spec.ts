import { describe, expect, it } from 'vitest'
import { use11ContainerWithMostWater } from '@/composables/leet-debug/use-11-container-with-most-water'

describe('use11ContainerWithMostWater', () => {
  const { myAnswer } = use11ContainerWithMostWater()
  it('should return the maximum water container area', () => {
    expect(myAnswer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(myAnswer([1, 1])).toBe(1)
    expect(myAnswer([4, 3, 2, 1, 4])).toBe(16)
    expect(myAnswer([1, 2, 1])).toBe(2)
  })
})
