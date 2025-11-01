import { ListNode } from '@/composables/leet-debug/models/ListNode'

export const use19 = () => {
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

  // this apparently beats 100%?
  // i guess this is wrong because i used array conversion?
  const myAnswer = (head: ListNode | null, n: number): ListNode | null => {
    const clone = linkedListToArray(head)

    clone.splice(-n, 1)

    return arrayToLinkedList(clone)
  }

  const answerUsingListNode = (head: ListNode | null, n: number): ListNode | null => {
    const dummy = new ListNode(0, head)
    let first: ListNode | null = dummy
    let second: ListNode | null = dummy

    for (let i = 0; i < n; i++) {
      if (first) first = first.next
    }

    while (first && first.next) {
      first = first.next
      if (second) second = second.next
    }

    second!.next = second!.next!.next

    return dummy.next
  }

  return { myAnswer, arrayToLinkedList, linkedListToArray, answerUsingListNode }
}
