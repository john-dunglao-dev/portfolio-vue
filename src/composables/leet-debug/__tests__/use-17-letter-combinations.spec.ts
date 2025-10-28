import { describe, expect, it } from 'vitest'
import { use17 } from '@/composables/leet-debug/use-17'

const testCases = [
  {
    input: '23',
    expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    input: '2',
    expected: ['a', 'b', 'c'],
  },
  {
    input: '7',
    expected: ['p', 'q', 'r', 's'],
  },
  {
    input: '',
    expected: [],
  },
  {
    input: '9',
    expected: ['w', 'x', 'y', 'z'],
  },
  {
    input: '234',
    expected: [
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ],
  },
]

describe('use17LetterCombination', () => {
  describe('myAnswer', () => {
    it('should work', () => {
      const { myAnswer } = use17()

      for (const test of testCases) {
        expect(myAnswer(test.input).sort()).toEqual(test.expected.sort())
      }
    })
  })
})
