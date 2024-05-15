/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 * Solution :
 * 1. Reverse entire array : [7,6,5,4,3,2,1]
 * 2. Reverse first k element again [5,6,7,1,2,3,4]
 * 3. Reverse all other elements again.
 *
 */

function rotate(nums: number[], inputK: number): void {
    //First reverse entire arr
    const k = inputK % nums.length;
    let endIndex = nums.length - 1;
    for(let i = 0; i < nums.length / 2; i++) {
        const tmp = nums[endIndex - i];
        nums[endIndex - i] = nums[i];
        nums[i] = tmp;
    }

    //Rotate first part
    endIndex = k - 1;
    for(let i = 0; i < k / 2; i++) {
        const tmp = nums[endIndex - i];
        nums[endIndex - i] = nums[i];
        nums[i] = tmp;
    }

    endIndex = nums.length - 1;
    for (let i = 0; i < (nums.length - k) / 2; i++) {
        const tmp = nums[endIndex - i];
        nums[endIndex - i] = nums[i + k];
        nums[i + k] = tmp;
    }
}

const arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); //    [5,6,7,1,2,3,4]