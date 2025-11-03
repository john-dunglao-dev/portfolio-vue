import { ListNode } from './models/ListNode'

export const use21 = () => {
  // beats 100%
  const merge = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    const dummy = new ListNode(0)
    let looper: ListNode = dummy

    if (!list1) return list2
    if (!list2) return list1

    while (list1 && list2) {
      if (list1.val < list2.val) {
        looper.next = new ListNode(list1.val)
        list1 = list1.next
      } else {
        looper.next = new ListNode(list2.val)
        list2 = list2.next
      }

      if ((list1 || list2) && looper?.next) {
        looper = looper.next
      }
    }

    if (list1) {
      looper.next = list1
    } else if (list2) {
      looper.next = list2
    }

    return dummy.next
  }

  const myAnswer = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    return merge(list1, list2)
  }

  return { myAnswer, merge }
}
