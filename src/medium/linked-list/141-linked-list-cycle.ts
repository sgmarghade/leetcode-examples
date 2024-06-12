/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Solution is to use 2 points. 1 fast and slow. Fast pointer move 2 steps and
 * slow pointer move 1 step at a time. If there is any cycle both will
 * meet somewhere.
 * https://www.youtube.com/watch?v=RRSItF-Ts4Q
 */

import {ListNode} from "../../linked-list-node";
export function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        head = head!.next;
        if (fast === head) { //Both points to same ref.
            return true;
        }

    }
    return false;
}