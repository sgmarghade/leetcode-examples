/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

function rotate(nums: number[], k: number): void {
    let arrLength = nums.length;
    if (arrLength <= 1) {
        return;
    }
    while(k > 0) {
        //Rotate arr each time.
        let replaceValue = nums[0];
        for(let i = 1; i <= arrLength; i++) {
            const tmpReplace = nums[i % arrLength];
            nums[i % arrLength] = replaceValue;
            replaceValue = tmpReplace;
        }
        k--;
    }
}

const arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); //    [5,6,7,1,2,3,4]