import { ListNode } from '@/composables/leet-debug/models/ListNode'

export const useAddTwoNumbers = () => {
  const reversedListNodeToString = (node: ListNode | null): string => {
    if (!node) return ''

    if (!node.next) return `${node.val}`

    return `${reversedListNodeToString(node.next)}${node.val}`
  }

  const stringToReversedListNode = (str: string): ListNode | null => {
    if (str.length === 0) return null

    const val = parseInt(str[0], 10)
    const next = stringToReversedListNode(str.slice(1))

    return new ListNode(val, next)
  }

  const myAnswer = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const l1String = BigInt(reversedListNodeToString(l1))
    console.debug('first number:', l1String)

    const l2String = BigInt(reversedListNodeToString(l2))
    console.debug('second number:', l2String)

    const sum = (l1String + l2String).toString().split('').reverse().join('')
    console.debug('storing reversed sum:', sum)

    return stringToReversedListNode(sum.toString())
  }

  const solution = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const init = new ListNode(0)
    let temp = init
    let carry = 0

    while (l1 !== null || l2 !== null || carry !== 0) {
      const valL1 = l1 ? l1.val : 0
      const valL2 = l2 ? l2.val : 0

      const sum = valL1 + valL2 + carry
      carry = Math.floor(sum / 10)
      temp.next = new ListNode(sum % 10)
      temp = temp.next

      if (l1 !== null) l1 = l1.next
      if (l2 !== null) l2 = l2.next
    }

    return init.next
  }

  return {
    myAnswer,
    solution,
    stringToReversedListNode,
    reversedListNodeToString,
  }
}
