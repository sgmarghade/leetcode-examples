/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 */

//As array is sorted no need to check any entry after diff is more than required value
export function twoSum(numbers: number[], target: number): number[] {
    for(let i =0; i < numbers.length; i++) {
        const currentValue = numbers[i];
        const requiredNumber: number = target - currentValue;
        for(let j = i+1; j < numbers.length; j++ ) {
            //Array is sorted. next number will be more than what we need
            if (numbers[j] > requiredNumber) {
                break;
            }
            if (requiredNumber === numbers[j]) {
                return [i+1, j+1];
            }
        }
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9)); //[1,2]
console.log(twoSum([2,3,4], 6)); //[1,3]
console.log(twoSum([-1,0], -1)); //[1,2]