import { ListNode } from '@/composables/leet-debug/models/ListNode'

export const use23 = () => {
  // [ [index, value] ]
  const leastValue = (items: Array<number[]>): number[] | null => {
    if (items.length === 1) return items[0]

    let least = null

    for (let i = 0; i < items.length; i++) {
      if (least === null || items[i][1] < least[1]) {
        least = items[i]
      }
    }

    return least
  }

  const merge = (lists: Array<ListNode | null>): ListNode | null => {
    const dummy = new ListNode(0)
    let looper: ListNode = dummy

    if (!lists.length) return null
    if (lists.length === 1) return lists[0]

    while (lists.length > 1) {
      let i = 0
      let least: number[] | null = null

      while (i < lists.length && lists.length > 1) {
        if (lists[i]) {
          if (lists[i] && (least === null || least?.[1] > lists[i]!.val)) {
            least = [i, lists[i]!.val]
          }
        } else {
          lists.splice(i, 1)
          continue
        }

        i++
      }

      if (least && lists[least[0]]) {
        looper.next = new ListNode(lists[least[0]]!.val)
        looper = looper.next

        lists[least[0]] = lists[least[0]]!.next
      }
    }

    if (lists[0]) {
      looper.next = lists[0]
    }

    return dummy.next
  }

  const anotherMerge = (lists: Array<ListNode | null>): ListNode | null => {
    const dummy = new ListNode(0)
    const currentNode: ListNode = dummy

    if (!lists.length) return null
    if (lists.length === 1) return lists[0]

    while (lists.length > 1) {
      let i = 0

      while (i < lists.length) {
        const item = lists[i]

        if (!item) {
          continue
        }

        if (!currentNode.next) {
          currentNode.next = new ListNode(item.val)
          // } else if (currentNode.next.val > )
        }

        i++
      }
    }

    if (lists[0]) {
      currentNode.next = lists[0]
    }

    return dummy.next
  }

  const myAnswer = (lists: Array<ListNode | null>): ListNode | null => {
    return merge(lists)
  }

  return { myAnswer, anotherMerge }
}
