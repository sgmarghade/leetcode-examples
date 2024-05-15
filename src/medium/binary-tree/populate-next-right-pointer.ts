/**
 * Given a binary tree
 *
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 */


export class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null

    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}

//We will use BFS technique to get all nodes at same level.
export function connect(root: Node | null): Node | null {
    if (!root) {
        return root;
    }

    const queue: Node[] = [];
    if (root.left) {
        queue.push(root.left);
    }
    if (root.right) {
        queue.push(root.right);
    }
    while(queue.length) {
        const tmpQueue: Node[] = [];
        let current = queue.shift() as Node;
        while(current) { //Till queue is empty
            if (current.left) {
                tmpQueue.push(current.left);
            }
            if (current.right) {
                tmpQueue.push(current.right);
            }

            const next = queue.shift() as Node;
            if (next) {
                (current as Node).next = next;
            }
            current = next;
        }
        queue.push(...tmpQueue); //queue is empty at this point.
    }

    return root;
}