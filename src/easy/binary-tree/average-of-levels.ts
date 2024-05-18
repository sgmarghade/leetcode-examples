/**
 * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 *
 * USE BFS : For same level find avg
 */

import { TreeNode} from "./tree-node";
export function averageOfLevels(root: TreeNode | null): number[] {
    const avg: number[] = [];
    if (!root) {
        avg;
    }
    const queue: (TreeNode | null)[] = [];
    queue.push(root);
    let tmpQueue: (TreeNode | null)[] = [];
    while(queue.length) {
        const totalInQueue = queue.length;
        let currentTotal = 0;
        for(let i = 0; i < totalInQueue; i++) {
            const node = queue.pop();
            if (node && node.left) {
                tmpQueue.push(node.left);
            }
            if (node && node.right) {
                tmpQueue.push(node.right);
            }
            currentTotal += node ? node.val : 0;
        }
        queue.push(...tmpQueue);
        tmpQueue = [];
        avg.push(currentTotal / totalInQueue);
    }
    return avg;
}