/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

import {ListNode} from "../../linked-list-node";
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const firstArr: number[] = [];
    const secondArr: number[] = [];
    while (l1) {
        firstArr.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        secondArr.push(l2.val);
        l2 = l2.next;
    }
    //console.log(firstArr, secondArr);
    const finalArr: number[] = [];
    let currentCarryOver = 0;
    let firstArrIndex = 0;
    let secondArrIndex = 0;
    while (true) {
        if (firstArrIndex >= firstArr.length && secondArrIndex >= secondArr.length) {
            break;
        }
        const firstArrDigit: number = firstArrIndex < firstArr.length ? firstArr[firstArrIndex] : 0;
        const secondArrDigit: number = secondArrIndex < secondArr.length ? secondArr[secondArrIndex] : 0;
        const nextSum = firstArrDigit + secondArrDigit + currentCarryOver;
        currentCarryOver = nextSum > 9 ? Math.floor(nextSum / 10) : 0;
        finalArr.push(nextSum - 10 * currentCarryOver);
        firstArrIndex++;
        secondArrIndex++;
    }
    if (currentCarryOver > 0) {
        finalArr.push(currentCarryOver);
    }
    if (!finalArr.length) {
        return null;
    }
    let currentHead = new ListNode(finalArr[0]);
    let returnHead = currentHead;
    for (let returnIndex = 1; returnIndex < finalArr.length; returnIndex++) {
        currentHead.next = new ListNode(finalArr[returnIndex]);
        currentHead = currentHead.next;
    }

    return returnHead;
}