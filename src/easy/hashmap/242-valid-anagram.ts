/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

function isAnagram(s: string, t: string): boolean {
    const map: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        }

        map[t[i]] -= 1;
        if (map[t[i]] === 0) {
            delete map[t[i]];
        }
    }

    return Object.keys(map).length === 0;
}

console.log(isAnagram('anagram', 'nagaram')); //true
console.log(isAnagram('rat', 'cat')); //false