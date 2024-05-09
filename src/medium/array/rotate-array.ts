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

// function inPlaceSolution(nums: number[], k: number): void {
//     let arrLength = nums.length;
//     if (arrLength <= 1) {
//         return;
//     }
//     let finalDisplacement = k % arrLength;
//     if (finalDisplacement === 0) {
//         return;
//     }
//
//     let outerLoopLimit = 1;
//     let innerLoopHops = arrLength;
//
//     //If for length of 4 displacement is 2 then we have to hop each element once till it's back to 1st place
//     // and do it for all elements in each hop
//     if (arrLength % finalDisplacement === 0) {
//         outerLoopLimit = finalDisplacement;
//         innerLoopHops = arrLength / finalDisplacement;
//     }
//     for (let outerLoopStartIndex = 0; outerLoopStartIndex < outerLoopLimit; outerLoopStartIndex++) {
//         let replaceValue = nums[outerLoopStartIndex];
//         let replaceIndex = outerLoopStartIndex;
//         for (let i = 0; i < innerLoopHops; i++) {
//             const tmpReplaceIndex = (replaceIndex + finalDisplacement) % arrLength;
//             const tmpReplace = nums[tmpReplaceIndex];
//             nums[tmpReplaceIndex] = replaceValue;
//             replaceValue = tmpReplace;
//             replaceIndex = tmpReplaceIndex;
//             if (replaceIndex === 0 && i !== 0 && outerLoopLimit === 1) {
//                 replaceIndex = 1;
//                 replaceValue = nums[replaceIndex];
//             }
//         }
//     }
// }