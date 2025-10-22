export const use11ContainerWithMostWater = () => {
  const myAnswer = (height: number[]): number => {
    console.debug('--- Debug Info ---')
    console.debug('Input height:', height)

    let l = 0,
      r = height.length - 1,
      max = 0

    while (l < r) {
      const area = Math.min(height[l], height[r]) * (r - l)

      if (area > max) {
        max = area
        console.debug(
          `New max area=${max} found between l=${l} (height=${height[l]}) and r=${r} (height=${height[r]})`
        )
      }

      if (height[l] < height[r]) {
        l++
      } else {
        r--
      }
    }

    return max
  }

  return { myAnswer }
}
