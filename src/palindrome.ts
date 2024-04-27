/*
Given an integer x, return true if x is a palindrome, and false otherwise.
* */
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    const charArr = new String(x).valueOf().split('');
    let start: number = 0;
    let end: number = charArr.length - 1;
    while (start < end) {
        if (charArr[start] !== charArr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome(121)); //true
console.log(isPalindrome(124)); //false