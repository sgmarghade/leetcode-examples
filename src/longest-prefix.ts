/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
* */

function longestCommonPrefix(strs: string[]): string {
    let longestPrefix = '';
    for(let stringCurrentCharIndex = 0; stringCurrentCharIndex <= 200; stringCurrentCharIndex++ ) {
        let isMatchingAll = true;
        let nextCharMatch: string = strs[0][stringCurrentCharIndex];
        if (!nextCharMatch) {
            return longestPrefix;
        }
        for(let currentString of strs) {
            if(currentString[stringCurrentCharIndex] !== nextCharMatch) {
                isMatchingAll = false;
            }
        }
        if (!isMatchingAll) {
            return longestPrefix;
        }
        longestPrefix += nextCharMatch;
    }
    return longestPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); //fl