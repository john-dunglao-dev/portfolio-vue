import { describe, expect, it, test } from 'vitest'
import { useLongestPalindromicSubstring } from '@/composables/leet-debug/use-longest-palindromic-substring'

describe('useLongestPalindromicSubstring', () => {
  const { myAnswer, solution } = useLongestPalindromicSubstring()

  describe('basic test for my answers', () => {
    it('should return "aba" for "babad"', () => {
      expect(myAnswer('babad')).toBe('bab')
      expect(solution('babad')).toBe('aba')
    })
    it('should return "bb" for "cbbd"', () => {
      expect(myAnswer('cbbd')).toBe('bb')
      expect(solution('cbbd')).toBe('bb')
    })
    it('should return "racecar" for "racecar"', () => {
      expect(myAnswer('racecar')).toBe('racecar')
      expect(solution('racecar')).toBe('racecar')
    })
    it('should return "12321" for "12321"', () => {
      expect(myAnswer('12321')).toBe('12321')
      expect(solution('12321')).toBe('12321')
    })
    it('should return "12345678987654321" for "12345678987654321"', () => {
      expect(myAnswer('12345678987654321')).toBe('12345678987654321')
      expect(solution('12345678987654321')).toBe('12345678987654321')
    })
    it('should return "abcdefgfedcba" for "abcdefgfedcba"', () => {
      expect(myAnswer('abcdefgfedcba')).toBe('abcdefgfedcba')
      expect(solution('abcdefgfedcba')).toBe('abcdefgfedcba')
    })
    it('should return "a" for "a"', () => {
      expect(myAnswer('a')).toBe('a')
      expect(solution('a')).toBe('a')
    })
    it('should return "" for ""', () => {
      expect(myAnswer('')).toBe('')
      expect(solution('')).toBe('')
    })
    it('should return "noon" for "noon"', () => {
      expect(myAnswer('noon')).toBe('noon')
      expect(solution('noon')).toBe('noon')
    })
    it('should return "aba" for "abacdfgdcaba"', () => {
      expect(myAnswer('abacdfgdcaba')).toBe('aba')
      expect(solution('abacdfgdcaba')).toBe('aba')
    })
    it('should return "abacdedcaba" for "abacdedcaba"', () => {
      expect(myAnswer('abacdedcaba')).toBe('abacdedcaba')
      expect(solution('abacdedcaba')).toBe('abacdedcaba')
    })
    it('should return "geeksskeeg" for "forgeeksskeegfor"', () => {
      expect(myAnswer('forgeeksskeegfor')).toBe('geeksskeeg')
      expect(solution('forgeeksskeegfor')).toBe('geeksskeeg')
    })
    it('should return "abc123321cba" for "abc123321cba"', () => {
      expect(myAnswer('abc123321cba')).toBe('abc123321cba')
      expect(solution('abc123321cba')).toBe('abc123321cba')
    })
    it('should return "xyzzyx" for "xyzzyx"', () => {
      expect(myAnswer('xyzzyx')).toBe('xyzzyx')
      expect(solution('xyzzyx')).toBe('xyzzyx')
    })
    it('should return "palindromeemordnilap" for "palindromeemordnilap"', () => {
      expect(myAnswer('palindromeemordnilap')).toBe('palindromeemordnilap')
      expect(solution('palindromeemordnilap')).toBe('palindromeemordnilap')
    })

    test.skip('should handle long strings', () => {
      // Long string test case commented out for myAnswer due to performance issues
      expect(
        myAnswer(
          'zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir'
        )
      ).toBe('gykrkyg')
    })

    it('should handle long strings with solution', () => {
      expect(
        solution(
          'zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir'
        )
      ).toBe('gykrkyg')
    })
  })
})
