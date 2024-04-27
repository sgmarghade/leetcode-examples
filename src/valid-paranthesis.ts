/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */
function isValid(s: string): boolean {
    const stack: string[] = [];
    const closingParanthesisString = ')}]';
    const openingParanthesisString = '({[';
    for (let index = 0; index < s.length; index++) {
        const currentChar = s[index];
        if (openingParanthesisString.indexOf(currentChar) !== -1) {
            stack.push(currentChar);
        } else {
            const openingChar = stack.pop();
            if (!openingChar || openingParanthesisString.indexOf(openingChar) !== closingParanthesisString.indexOf(currentChar)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("as")); //false
console.log(isValid("()[]")); //true