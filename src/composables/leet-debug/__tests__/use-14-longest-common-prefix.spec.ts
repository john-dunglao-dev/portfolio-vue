import { describe, expect, it } from 'vitest'
import { use14LongestCommonPrefix } from '@/composables/leet-debug/use-14-longest-common-prefix'

const testCases = [
  {
    input: ['flower', 'flow', 'flight'],
    expected: 'fl',
  },
  {
    input: ['dog', 'racecar', 'car'],
    expected: '',
  },
  {
    input: ['', 'b'],
    expected: '',
  },
  {
    input: ['a', 'a', 'a'],
    expected: 'a',
  },
  {
    input: ['abc', 'abc', 'abc'],
    expected: 'abc',
  },
  {
    input: ['a'],
    expected: 'a',
  },
]

describe('use-14', () => {
  const { myAnswer } = use14LongestCommonPrefix()

  describe('myAnswer', () => {
    testCases.forEach(({ input, expected }, index) => {
      it(`Test Case #${index + 1}: input=${JSON.stringify(input)} => expected='${expected}'`, () => {
        const result = myAnswer(input)
        console.debug(`Result: '${result}'`)
        expect(result).toBe(expected)
      })
    })
  })

  describe('anotherAnswer', () => {
    const { anotherAnswer } = use14LongestCommonPrefix()

    testCases.forEach(({ input, expected }, index) => {
      it(`Test Case #${index + 1}: input=${JSON.stringify(input)} => expected='${expected}'`, () => {
        const result = anotherAnswer(input)
        console.debug(`Result: '${result}'`)
        expect(result).toBe(expected)
      })
    })
  })
})
