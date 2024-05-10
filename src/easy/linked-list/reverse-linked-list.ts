export class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function buildLinkedList(arr: number[]): ListNode | null {
    let head = null;
    let current = null;
    for (let value of arr) {
        const node: ListNode = new ListNode(value);
        if (head === null) {
            head = node;
            current = head;
        } else {
            (current as ListNode).next = node;
            current = (current as ListNode).next;
        }
    }
    return head;
}

export function printLinkedList(head: ListNode | null) {
    let current = head as ListNode;
    while(current) {
        console.log(current.value+' -> ');
        current = current.next as ListNode;
    }
}

export function reverseLinkedList(head: ListNode): ListNode | null {
    let prev = null;
    let current = head;
    let next = head.next;

    while(next) {
        current.next = prev as ListNode;
        prev = current;
        current = next;
        next = next.next;
    }
    current.next = prev;
    return current;
}
const head = buildLinkedList([1,2,3,4]);
printLinkedList(head);
const newHead = reverseLinkedList(head as ListNode);
console.log('*****************************');
printLinkedList(newHead);