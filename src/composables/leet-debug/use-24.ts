import { ListNode } from '@/composables/leet-debug/models/ListNode'

export const use24 = () => {
  // beats 100%
  const myAnswer = (head: ListNode | null): ListNode | null => {
    if (!head) return null
    if (!head.next) return head

    const dummy = new ListNode(0)
    let looper: ListNode | null = dummy

    while (head) {
      if (head.next) {
        if (looper) {
          looper.next = new ListNode(head.next.val, new ListNode(head.val))
          looper = looper.next.next
        }

        head = head.next.next
      } else if (head) {
        if (looper) {
          looper.next = new ListNode(head.val)
        }
        break
      } else {
        break
      }
    }

    return dummy.next
  }

  return { myAnswer }
}
