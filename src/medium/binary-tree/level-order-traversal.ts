/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
export function levelOrder(root: TreeNode | null): number[][] {
    const values: number[][] = [];
    if (!root) {
        return values;
    }
    const mainQueue: TreeNode[] = [];
    let levelQueue: TreeNode[] = [];
    let tmpValues: number[] = [];

    mainQueue.push(root);

    while (mainQueue.length > 0) {
        const currentNode = mainQueue.shift() as TreeNode;
        tmpValues.push(currentNode.val);
        if (currentNode.left) {
            levelQueue.push(currentNode.left);
        }
        if (currentNode.right) {
            levelQueue.push(currentNode.right);
        }
        if (mainQueue.length === 0) {
            mainQueue.push(...levelQueue);
            values.push(tmpValues);

            levelQueue = []
            tmpValues = [];
        }
    }

    return values;
}
