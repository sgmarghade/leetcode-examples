/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

function reverseWords(s: string): string {
    const originalArray: string[] = s.trim().replace(/\s+/g, ' ').split(' ');
    const newArray = originalArray.reverse();
    return newArray.join(' ');
}

console.log(reverseWords('the sky is blue')); //blue is sky the
console.log(reverseWords('a good   example')); //example good a