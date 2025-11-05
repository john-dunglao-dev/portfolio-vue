import { ListNode } from './models/ListNode'

export const use24 = () => {
  const myAnswer = (head: ListNode | null): ListNode | null => {
    if (!head) return null
    if (!head.next) return head

    const dummy = new ListNode(0)
    let looper: ListNode | null = dummy

    while (head) {
      if (head.next) {
        looper.next = new ListNode(head.next.val, new ListNode(head.val))

        head = head.next.next
        looper = looper.next.next
      } else if (head) {
        looper.next = new ListNode(head.val)
        break
      } else {
        break
      }
    }

    return dummy.next
  }

  return { myAnswer }
}
