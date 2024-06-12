/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

//Create hashmap and store total count.
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: { [key:string]: number } = {};
    magazine.split('').forEach((letter) => {
        if (map[letter]) {
            map[letter] = map[letter] + 1;
        } else {
            map[letter] = 1;
        }
    });

    for (let i = 0; i < ransomNote.length; i++) {
        if(!map[ransomNote[i]]) {
            return false;
        }

        map[ransomNote[i]] = map[ransomNote[i]] - 1;
    }

    return true;
}

console.log(canConstruct('a', 'b')); //false
console.log(canConstruct('aa', 'ab')); //False
console.log(canConstruct('aa', 'aab')); //true