export const use10 = () => {
  const solution = (s: string, p: string) => {
    console.debug('--- Debug Info ---')
    console.debug('matching string:', s, 'with pattern:', p)

    // Use dynamic programming approach
    const sLen = s.length
    const pLen = p.length

    // dp[i][j] represents whether s[0...i-1] matches p[0...j-1]
    const dp: boolean[][] = Array(sLen + 1)
      .fill(null)
      .map(() => Array(pLen + 1).fill(false))

    // Empty pattern matches empty string
    dp[0][0] = true

    // Handle patterns like a*, a*b*, a*b*c* that can match empty string
    for (let j = 2; j <= pLen; j += 2) {
      if (p[j - 1] === '*') {
        dp[0][j] = dp[0][j - 2]
      }
    }

    console.debug('Initial DP table:')
    console.debug('dp[0]:', dp[0])

    for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= pLen; j++) {
        const sChar = s[i - 1]
        const pChar = p[j - 1]

        console.debug(`Checking s[${i - 1}]='${sChar}' with p[${j - 1}]='${pChar}'`)

        if (pChar === '*') {
          // Current pattern character is '*'
          const prevPChar = p[j - 2]

          // Case 1: Match zero occurrences of the character before '*'
          dp[i][j] = dp[i][j - 2]

          // Case 2: Match one or more occurrences if characters match
          if (prevPChar === '.' || prevPChar === sChar) {
            dp[i][j] = dp[i][j] || dp[i - 1][j]
          }

          console.debug(`  '*' pattern: prevChar='${prevPChar}', dp[${i}][${j}]=${dp[i][j]}`)
        } else if (pChar === '.' || pChar === sChar) {
          // Characters match directly
          dp[i][j] = dp[i - 1][j - 1]
          console.debug(`  Direct match: dp[${i}][${j}]=${dp[i][j]}`)
        } else {
          // Characters don't match
          dp[i][j] = false
          console.debug(`  No match: dp[${i}][${j}]=${dp[i][j]}`)
        }
      }
      console.debug(`dp[${i}]:`, dp[i])
    }

    const result = dp[sLen][pLen]
    console.debug(`Final result: ${result}`)
    return result
  }

  return { solution }
}
