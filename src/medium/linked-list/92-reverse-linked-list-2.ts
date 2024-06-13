/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 * Example 2:
 *
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let tmpNodePointer = head;
    let leftCounter = 1;
    const totalElements = right - left + 1;

    while (leftCounter < left) {
        tmpNodePointer = (tmpNodePointer as ListNode).next;
        leftCounter++;
    }

    const arr: (ListNode | null)[] = [];

    //Push elements from left to right to arr;
    for (let i = 1; i <= totalElements; i++) {
        arr.push(tmpNodePointer);
        tmpNodePointer = (tmpNodePointer as ListNode).next;
    }

    //Swap values of arr;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const leftNode = arr[i];
        const rightNode = arr[j];
        const tmp = (leftNode as ListNode).val;
        (leftNode as ListNode).val = (rightNode as ListNode).val;
        (rightNode as ListNode).val = tmp;
        i++;
        j--;
    }

    return head;
}
