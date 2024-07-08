/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 */

/**
 * You can try with brute force where check with right pointer for every left pointer
 * 2nd approach :
 *  Start with L and R as end pointers. Calculate area.
 *  Move low height pointer till both poiters are same.
 */


function maxArea(height: number[]): number {
    let leftPointer: number = 0;
    let rightPointer: number = height.length - 1;
    let area: number = 0;
    while(leftPointer !== rightPointer) {
        const leftHeight = height[leftPointer];
        const rightHeight = height[rightPointer];
        const minHeight = Math.min(leftHeight, rightHeight);
        area = Math.max(area, minHeight * (rightPointer - leftPointer));
        if (leftHeight < rightHeight) {
            leftPointer++;
        }else {
            rightPointer--;
        }
    }

    return area;
}