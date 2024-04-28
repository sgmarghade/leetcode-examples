/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* */
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return [];
}

console.log(twoSum([1, 2, 3, 4], 7)); //[2,3]