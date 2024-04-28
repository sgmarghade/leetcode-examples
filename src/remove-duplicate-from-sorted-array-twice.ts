/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    const tempArr: number[] = [];
    let total: number = 0;
    let currentVal: number = nums[0];
    let currentCount: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currentVal !== nums[i]) {
            currentCount === 1 ? tempArr.push(currentVal) : tempArr.push(...[currentVal, currentVal]);
            total += currentCount;
            currentVal = nums[i];
            currentCount = 1;
        } else {
            currentCount = Math.min(currentCount + 1, 2);
        }
    }
    currentCount === 1 ? tempArr.push(currentVal) : tempArr.push(...[currentVal, currentVal]);
    console.log(tempArr);
    console.log(total + currentCount);
    for (let i = 0; i < total + currentCount; i++) {
        nums[i] = tempArr[i];
    }
    return total + currentCount; //last value in currentVal
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //[0,0,1,1,2,2,3,3,4] , 9
console.log(removeDuplicates([])); //0