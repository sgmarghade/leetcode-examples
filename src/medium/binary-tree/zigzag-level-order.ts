/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */
import {TreeNode} from "../../easy/binary-tree/tree-node";

export function zigzagLevelOrder(root: TreeNode| null): number[][] {
    const values: number[][] = [];
    if (!root) {
        return values;
    }
    const mainQueue: TreeNode[] = [];
    let levelQueue: TreeNode[] = [];
    let tmpValues: number[] = [];

    mainQueue.push(root);
    let leftToRight = true;
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
            if (leftToRight) {
                values.push(tmpValues);
            } else {
                values.push(tmpValues.reverse());
            }
            levelQueue = []
            tmpValues = [];
            leftToRight = !leftToRight;
        }
    }

    return values;
}