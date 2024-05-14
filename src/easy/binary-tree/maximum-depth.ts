/**
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function goDepth(root: TreeNode | null, prevDepth: number): number {
    if (!root) {
        return prevDepth;
    }

    return Math.max(goDepth(root.left, prevDepth + 1), goDepth(root.right, prevDepth + 1));
}

export function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    return Math.max(goDepth(root.left, 1), goDepth(root.right, 1));
}

