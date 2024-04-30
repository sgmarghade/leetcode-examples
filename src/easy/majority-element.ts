/**
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 *
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let currentRunningNumber;
    let currentRunningNumberCount = 0;
    let maxCountFound = 0;
    let maxCountNumber = 0;
    for (let currentNum of nums) {
        if (currentNum === currentRunningNumber) {
            currentRunningNumberCount++;
        } else {
            currentRunningNumber = currentNum;
            currentRunningNumberCount = 1;
        }
        if (currentRunningNumberCount > maxCountFound) {
            maxCountFound = currentRunningNumberCount;
            maxCountNumber = currentNum;
        }
    }
    return maxCountNumber;
}

console.log(majorityElement([2,2,1,1,1,2,2])); //2
console.log(majorityElement([3,2,3])); //3