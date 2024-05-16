/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode, right?: TreeNode) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * USE BFS to get all element and print last element value
 *
 */
export function rightSideView(root: TreeNode | null): number[] {
    const rightValues: number[] = [];
    if (!root) {
        return rightValues;
    }
    const mainQueue: TreeNode[] = [];
    let tmpQueue: TreeNode[] = [];
    mainQueue.push(root);

    while (mainQueue.length > 0) {
        const currentNode = mainQueue.shift() as TreeNode;
        if (currentNode.left) {
            tmpQueue.push(currentNode.left);
        }
        if (currentNode.right) {
            tmpQueue.push(currentNode.right);
        }
        if (mainQueue.length === 0) {
            rightValues.push(currentNode.val);
            mainQueue.push(...tmpQueue);
            tmpQueue = []
        }
    }

    return rightValues;
}

