export const useFindMedianSortedArrays = () => {
  const myAnswer = (nums1: number[], nums2: number[]): number => {
    const nums3: number[] = nums1.concat(nums2).sort((a, b) => a - b)

    if (nums3.length % 2 === 0) {
      const medianIndex = nums3.length / 2

      return (nums3[medianIndex] + nums3[medianIndex - 1]) / 2
    } else {
      const medianIndex = Math.floor(nums3.length / 2)

      return nums3[medianIndex]
    }
  }

  const solution = (nums1: number[], nums2: number[]): number => {
    const m = nums1.length
    const n = nums2.length
    const totalLength = m + n
    const midIndex = Math.floor(totalLength / 2)

    let i = 0 // Pointer for nums1
    let j = 0 // Pointer for nums2
    let current = 0 // Current element in the merged array
    let previous = 0 // Previous element in the merged array

    for (let k = 0; k <= midIndex; k++) {
      previous = current

      if (i < m && (j >= n || nums1[i] <= nums2[j])) {
        current = nums1[i]
        i++
      } else {
        current = nums2[j]
        j++
      }
    }

    if (totalLength % 2 === 0) {
      return (previous + current) / 2
    } else {
      return current
    }
  }

  return { myAnswer, solution }
}
