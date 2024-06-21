/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 */

/**
 * Find out all 0 and note down their co-ords.
 * iterate over those co-ordinates and set values of other row and col elements to 0
 */

function setZeroes(matrix: number[][]): void {
    const totalRows = matrix.length;
    const totalCols = matrix[0].length;
    const totalEligibleCoords: number[][] = [];
    for(let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            if(matrix[row][col] === 0) {
                totalEligibleCoords.push([row, col]);
            }
        }
    }

    totalEligibleCoords.forEach((zeroCoords) => {
       const [row, col] = zeroCoords;
        for(let row = 0; row < totalRows; row++) {
           matrix[row][col] = 0;
        }
        for (let col = 0; col < totalCols; col++) {
            matrix[row][col] = 0;
        }
    });
}

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);