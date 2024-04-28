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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const startOfList: ListNode = new ListNode(); //To keep refence of 1st node.
    let finalList = startOfList;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            finalList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            finalList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        finalList = finalList.next;
    }

    while(list1) {
        finalList.next = new ListNode(list1.val);
        list1 = list1.next;
        finalList = finalList.next;
    }

    while(list2) {
        finalList.next = new ListNode(list2.val);
        list2 = list2.next;
        finalList = finalList.next;
    }
    return startOfList.next; //First node is dummy node
}