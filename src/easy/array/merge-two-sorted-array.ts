/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const sortedArr: number[] = [];
    let index1 = 0;
    let index2 = 0;
    while(index1 < m && index2 < n) {
        if (nums1[index1] <= nums2[index2]) {
            sortedArr.push(nums1[index1]);
            index1++;
        } else {
            sortedArr.push(nums2[index2]);
            index2++;
        }
    }

    while(index1 < m) {
        sortedArr.push(nums1[index1]);
        index1++;
    }

    while(index2 < n) {
        sortedArr.push(nums2[index2]);
        index2++;
    }

    for(let i = 0; i < m+n; i++) {
        nums1[i] = sortedArr[i];
    }
}