/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * Input: head = [1,2,3,3,4,4,5]
 * Output: [1,2,5]
 */

import {ListNode} from "../../linked-list-node";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let first = head;
    let second = head.next;
    let newHead = new ListNode(); //dummy
    let newHeadStart = newHead;
    let isCheckingDup = false;
    while (second) {
        if (first.val === second.val) {
            isCheckingDup = true;
            //[1,1,1,2,3,4]
            while (second && second.val === first.val) {
                second = second.next as ListNode;
            }
            if (second) {
                isCheckingDup = false;
                first = second;
                second = second.next as ListNode;
            }
        } else {
            isCheckingDup = false;
            newHead.next = new ListNode(first.val);
            first = first.next as ListNode;
            second = second.next as ListNode;
            newHead = newHead.next;
        }
    }
    if (!isCheckingDup && first) {
        newHead.next = new ListNode(first.val);
    }
    return newHeadStart.next;
}