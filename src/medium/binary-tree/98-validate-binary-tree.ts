/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left
 * subtree
 *  of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

//Great solution https://www.youtube.com/watch?v=s6ATEkipzow
import {TreeNode} from "../../easy/binary-tree/tree-node";

function validate(node: TreeNode | null, leftBoundary: number, rightBoundary: number): boolean {
    if (!node) {
        return true;
    }

    if (node.val > rightBoundary || node.val < leftBoundary) {
        return false;
    }

    return validate(node.left, leftBoundary, node.val) && validate(node.right, node.val, rightBoundary);
}

export function isValidBST(root: TreeNode | null): boolean {
    return validate(root, -Infinity, Infinity);
}