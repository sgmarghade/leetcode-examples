/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 */

function convert(s: string, numRows: number): string {
    if(numRows === 1) {
        return s;
    }
    const metrix: string[][] = [];
    //initialise metrics
    for(let i = 0; i < numRows; i++) {
        metrix[i] = [];
    }
    let currentRowIndex = 0;
    let currentColIndex = 0;
    let fillCol = true;
    for(let currentCharIndex = 0; currentCharIndex < s.length; currentCharIndex++) {
        const currentChar = s[currentCharIndex];
        if (fillCol) {
            metrix[currentRowIndex][currentColIndex] = currentChar;
            if (currentRowIndex === numRows - 1) {
                fillCol = false;
                currentRowIndex--;
                currentColIndex++;
            } else {
                currentRowIndex++;
            }
        } else {
            metrix[currentRowIndex][currentColIndex] = currentChar;
            if (currentRowIndex === 0) {
                currentRowIndex++;
                fillCol = true;
            }else {
                currentRowIndex--;
                currentColIndex++;
            }
        }
    }
    let output = '';
    for(let i =0; i<numRows; i++) {
        output += metrix[i].join('');
    }

    return output;
}
console.log(convert('PAYPALISHIRING', 3));//PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4));//PINALSIGYAHRPI
