/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * We will be following bruteforce kind of approach where it will continue with all posibilities
 * @param startIndex
 * @param endIndex
 * @param inputString
 * @param cache
 */
function checkBruteforce1(startIndex: number, endIndex: number, inputString: string, cache: {[key: string]: boolean}): boolean {
    if (endIndex >= inputString.length) {
        return false;
    }
    const currentString = inputString.substring(startIndex, endIndex + 1);
    if (cache[currentString]) {
        if (endIndex === inputString.length - 1) {
            return true;
        } else {
            return checkBruteforce1(endIndex+1, endIndex+1, inputString, cache) || checkBruteforce1(startIndex, endIndex+1, inputString, cache);
        }
    } else {
        return checkBruteforce1(startIndex, endIndex+1, inputString, cache);
    }
}

//If last element is true means there is way to reach to the end.
//Complexity n*m
function checkBruteforce2(s: string, wordDict: string[]): boolean {
    const table = new Array(s.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i < table.length; i++) {
        if(table[i] === false) {
            continue;
        }
        for(let j = i + 1; j < table.length; j++) {
            if (wordDict.includes(s.slice(i, j))) {
                table[j] = true;
            }
        }
    }

    return table[table.length - 1];
}
function wordBreak(s: string, wordDict: string[]): boolean {
    // const cache = wordDict.reduce((map: {[key: string]: boolean}, data) => {
    //     map[data] = true;
    //     return map;
    // }, {});

    return checkBruteforce2(s, wordDict);
}

console.log(wordBreak('leetcode', ["leet","code"])); //true
console.log(wordBreak('applepenapple', ["apple","pen"])); //true
console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"])); //false