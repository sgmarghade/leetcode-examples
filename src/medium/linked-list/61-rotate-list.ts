/**
 * Given the head of a linked list, rotate the list to the right by k places.
 */
//Solution is simple. Move k onwards list to the beginning.
import {ListNode} from "../../linked-list-node";
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return head;
    }

    let totalLength = 1;
    let tail = head;
    while(tail.next) {
        totalLength++;
        tail = tail.next;
    }
    let finalK = k % totalLength;
    if (finalK === 0) {
        return head;
    }

    let currentHead = head;
    //Break the list from k node from the end and attach to beginning
    for(let i = 0; i < totalLength - 1 - finalK; i++) {
        currentHead = currentHead.next as ListNode;
    }

    tail.next = head;
    head = currentHead.next;
    currentHead.next = null;
    return head;
}