/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 */
/**
 * Approach is simple. Create 2 list left and right.
 * Add nodes to these list and connect left list to right.
 */
import {ListNode} from "../../linked-list-node";

export function partition(head: ListNode | null, x: number): ListNode | null {
    let left: ListNode | null = new ListNode(); //Dummy nodes
    let right: ListNode | null = new ListNode(); //Dummy nodes
    let ltail = left;
    let rtail = right;

    while(head) {
        if (head.val < x) {
            ltail.next = head;
            ltail = ltail.next;
        } else {
            rtail.next = head;
            rtail = rtail.next;
        }

        head = head.next;
    }

    rtail.next = null;
    ltail.next = right.next;
    return left.next;
}