/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */
import { TreeNode} from "./tree-node";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }
    if ((p && !q) || (!p && q)) {
        return false;
    }

    if (p?.val !== q?.val) {
        return false;
    }

    return isSameTree((p as TreeNode).left, (q as TreeNode)?.left) && isSameTree((p as TreeNode)?.right, (q as TreeNode)?.right);
}