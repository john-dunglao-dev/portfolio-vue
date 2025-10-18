export const useReverseInteger = () => {
  const roundToNearest32bit = (num: number): number => {
    const MAX_32BIT = Math.pow(2, 31) - 1
    const MIN_32BIT = -Math.pow(2, 31)

    if (num > MAX_32BIT) {
      return MAX_32BIT
    }

    if (num < MIN_32BIT) {
      return MIN_32BIT
    }

    return num
  }

  /**
   *
   * wtf my answer beats 90.41% of js submissions but only 20% of ts submissions???
   *
   * @param s
   * @returns
   */
  const myAnswer = (s: string): number => {
    s = s.trim()
    const firstMatch = s.match(/([+-])?[+-]?(\s+)?([0-9a-zA-Z\.])+/)
    const num = firstMatch ? parseInt(firstMatch[0], 10) : 0

    if (isNaN(num)) {
      return 0
    }

    return roundToNearest32bit(num)
  }

  return { myAnswer }
}
