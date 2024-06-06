/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Explanation :
 * Single digit numbers apart from 1 and 7, are not happy numbers.
 * So if n==1 or n==7 then directly return true.
 * Otherwise, run the loop until n>9, i.e. when the number of digits are greater than 1.
 * Inside this main loop, access individual digits of the number(n) and perform the square operation followed by sum.
 * This sum if equals to either 1 or 7, then we can return true. Else continue the loop, untill the sum becomes a single digit number.
 * Lastly, if 1 or 7 doesnot appear, then return false.
 */

function isHappy(n: number): boolean {
    while (n >= 10) {
        const split = ('' + n).split('');
        n = split.reduce((sum, input) => {
            return sum + ((+input) * (+input));//+is unary operator to convert string to number
        }, 0);
    }

    if (n === 1 || n === 7) {
        return true;
    }

    return false;
}

console.log(isHappy(19)); //true
console.log(isHappy(2)); //false