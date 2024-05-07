// @ts-ignore
/**
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
 *
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
 *
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
 *
 * Return the head of the copied linked list.
 *
 * The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
 *
 * val: an integer representing Node.val
 * random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
 * Your code will only be given the head of the original linked list.
 */

class MyListNode {
    val: number
    next: MyListNode | null
    random: MyListNode | null

    constructor(val?: number, next?: MyListNode, random?: MyListNode) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}

function copyRandomList(head: MyListNode | null): MyListNode | null {
    const originalNodeMap: Record<number, MyListNode> = {};
    const copyNodeMap: Record<number, MyListNode> = {};

    if (head === null) {
        return head;
    }
    let tempHeadNode = head;

    //Build straight linkedList first
    const newHead: MyListNode = new MyListNode(tempHeadNode.val);
    let tempNewHeadNode: MyListNode = newHead;
    let index = 0;
    while (tempHeadNode) {
        originalNodeMap[index] = tempHeadNode;
        copyNodeMap[index] = tempNewHeadNode;

        tempNewHeadNode.next = tempHeadNode.next ? new MyListNode(tempHeadNode.next?.val) : null;
        tempNewHeadNode = (tempNewHeadNode.next as MyListNode);
        tempHeadNode = (tempHeadNode.next as MyListNode);

        index++;
    }

    //Copy is ready with single linkedList. Now focus on random.
    index = 0;
    while (index < Object.keys(originalNodeMap).length) {
        const originalNode: MyListNode = originalNodeMap[index];
        if (originalNode && originalNode.random) {
                const randomIndex = Object.keys(originalNodeMap).findIndex((value) => {
                    return originalNodeMap[+value] === originalNode.random;
                });
                copyNodeMap[index].random = copyNodeMap[randomIndex];
        }

        index++;
    }

    return newHead;
}