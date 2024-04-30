/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Example 1:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 */

function strStr(haystack: string, needle: string): number {
    let currentIndex: number = -1;
    let needleIndex: number = 0;
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex++) {
        if (needleIndex >= needle.length) {
            return currentIndex;
        }

        if (haystack[haystackIndex] === needle[needleIndex]) {
            needleIndex++;
            currentIndex = currentIndex === -1 ? haystackIndex : currentIndex;
        } else {
            haystackIndex = currentIndex !== -1 ? currentIndex : haystackIndex; //Loop adds + 1
            needleIndex = 0;
            currentIndex = -1;
        }
    }
    return needleIndex >= needle.length ? currentIndex : -1; //To make sure needleIndex no initialised for partial string at the end
}

console.log(strStr('sadbutsad', 'sad')); //0
console.log(strStr('leetcode', 'leeto')); //-1
console.log(strStr('leetcode', 'odep')); //-1
console.log(strStr('mississippi', 'issip'));
console.log(strStr('mississippi', 'pi'));
