/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */

import {TreeNode} from "./tree-node";

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
        return true;
    }
    if ((!left && right) || (left && !right)) {
        return false;
    }

    if ((left as TreeNode).val !== (right as TreeNode).val) {
        return false;
    }

    return isMirror((left as TreeNode)?.right, (right as TreeNode)?.left) && isMirror((left as TreeNode)?.left , (right as TreeNode)?.right) && (left as TreeNode).val === (right as TreeNode).val
}
export function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return isMirror(root.left, root.right);
}