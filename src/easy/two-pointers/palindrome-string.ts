/*
* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
* */

function isPalindrome(s: string): boolean {
    const finalString = s.toLowerCase().replace(/\W|_/g, '');
    let startIndex: number = 0;
    let endIndex: number = finalString.length - 1;
    while(startIndex <= endIndex) {
        if (finalString[startIndex] !== finalString[endIndex]) {
            return false;
        }
        startIndex++;
        endIndex--;
    }

    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('"race a car')); //false