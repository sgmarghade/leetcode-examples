/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * Find out maximum which can be robbed at each element
 */

function rob(nums: number[]): number {
    let rob1 = 0;
    let rob2 = 0;

    for(let currentNumber of nums) {
        const tempAmount = Math.max(currentNumber + rob1, rob2);
        rob1 = rob2;
        rob2 = tempAmount;
    }

    return rob2;
}

console.log(rob([1,2,3,1])); //4;
console.log(rob([2,7,9,3,1])); //12