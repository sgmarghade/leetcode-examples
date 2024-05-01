
/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 *
 * Constraints:
 *
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 */
function getProduct(nums: number[]) {
    if (nums.length === 0) {
        return 1;
    }
    return nums.reduce((mult, value) => {
        return mult * value;
    }, 1);
}

function productExceptSelf(nums: number[]): number[] {
    if (nums.length === 0 || nums.length === 1) {
        return [];
    }
    let leftProduct = 1;
    let rightProduct = +getProduct(nums.slice(1)).toFixed();
    const answer: number[] = [rightProduct];
    for(let i = 1; i < nums.length; i++) {
        const prevValue = nums[i - 1];
        const currentVal = nums[i];
        //Find right product
        if (currentVal === 0) {
            rightProduct = getProduct(nums.slice(i+1));
        } else {
            rightProduct = rightProduct / currentVal;
        }

        //Find left product
        leftProduct = prevValue === 0 || leftProduct === 0 ? 0 : leftProduct * prevValue;
        answer[i] = +(leftProduct * rightProduct).toFixed(0);
    }

    return answer;
}

console.log(productExceptSelf([]));
console.log(productExceptSelf([1,2,3,4]));//[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));//[0,0,9,0,0]