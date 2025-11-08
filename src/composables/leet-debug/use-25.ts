import { ListNode } from './models/ListNode'

export const use25 = () => {
  const myAnswer = (head: ListNode | null, k: number): ListNode | null => {
    if (k <= 1) return head

    const dummy = new ListNode(0, head)
    let pointer: ListNode = dummy

    while (true) {
      let kth: ListNode | null = pointer
      for (let i = 0; i < k; i++) {
        kth = kth?.next ?? null
      }

      if (!kth) break

      const groupNext = kth.next

      let prev: ListNode | null = groupNext
      let curr: ListNode | null = pointer.next

      while (curr !== groupNext) {
        const temp = curr!.next
        curr!.next = prev
        prev = curr
        curr = temp
      }

      const tail: ListNode | null = pointer.next
      pointer.next = kth
      pointer = tail!
    }

    return dummy.next
  }

  return { myAnswer }
}
