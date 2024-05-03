/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal
 * substring
 *  consisting of non-space characters only.
 * Example 1:
 *
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * Example 2:
 *
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * Example 3:
 *
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 */

function lengthOfLastWord(s: string): number {
    let i: number = s.length - 1;

    //Start from end and reach to the end of word.
    while (i >= 0) {
        if (s[i] === ' ') {
            i--;
        } else {
            break;
        }
    }

    let length: number = 0;
    while (i >= 0) {
        if (s[i] !== ' ') {
            i--;
            length++;
        } else {
            break;
        }
    }
    return length;
}

console.log(lengthOfLastWord('Hello World')); //5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); //4
console.log(lengthOfLastWord('luffy is still joyboy')); //6
console.log(lengthOfLastWord('a')); //1
console.log(lengthOfLastWord('ab')); //2