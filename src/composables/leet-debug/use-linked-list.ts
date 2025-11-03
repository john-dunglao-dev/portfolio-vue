import { ListNode } from '@/composables/leet-debug/models/ListNode'

export const useLinkedList = () => {
  const arrayToLinkedList = (arr: number[]): ListNode | null => {
    if (!arr.length) return null

    const val = arr[0]
    const next = arrayToLinkedList(arr.slice(1))

    return new ListNode(val, next)
  }

  const linkedListToArray = (list: ListNode | null): number[] => {
    if (!list) return []

    if (!list.next) return [list.val]

    return [list.val, ...linkedListToArray(list.next)]
  }

  return { arrayToLinkedList, linkedListToArray }
}
