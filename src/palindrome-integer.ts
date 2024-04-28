/*
Given an integer x, return true if x is a palindrome, and false otherwise.
* */
function isPalindromeInt(x: number): boolean {
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

console.log(isPalindromeInt(121)); //true
console.log(isPalindromeInt(124)); //false