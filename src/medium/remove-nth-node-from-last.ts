/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let removerNode = head;
    let lastNode = head;
    //Move this node by n steps.
    while (n > 0 && lastNode) {
        lastNode = lastNode!.next; //Move this node by n steps.
        n -= 1;
    }

    //head is the one to be removed.
    if (lastNode === null) {
        head = head!.next;
        return head;
    }

    //When this node reaches last we know which node to remove.
    while (lastNode!.next) {
        removerNode = removerNode!.next;
        lastNode = lastNode!.next;
    }

    //current node to be removed. [1] //Last node to be removed
    if (removerNode!.next === null) {
        head = null;
    } else {
        removerNode!.next = removerNode!.next.next;
    }

    return head;
}