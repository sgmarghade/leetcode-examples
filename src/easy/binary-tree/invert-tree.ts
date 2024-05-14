/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

import { TreeNode} from "./tree-node";

function swapAndContinue(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }

    const tmp = root.right;
    root.right = root.left;
    root.left = tmp;

    swapAndContinue(root.left);
    swapAndContinue(root.right);

    return root;
}

export function invertTree(root: TreeNode | null): TreeNode | null {
    swapAndContinue(root);
    return root;
}