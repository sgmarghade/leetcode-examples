/**
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 *
 * The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 * Any live cell with fewer than two live neighbors dies as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population.
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 */

/**
 * As we have to reflex next step any change in current stage won't change new cell.
 * To use in-order update we can replace
 * 0 -> 0 : No change
 * 0 -> 2 : 0 changed to 2 (means 1 in future)
 * 1 -> 1 : No change
 * 1 -> 3 : 1 has changed to 3 (mean 0 in future)
 *
 * In 2nd iteration we will change 2 to 1 and 3 to 0.
 */

function gameOfLife(board: number[][]): void {
    let totalRows = board.length;
    let totalCols = board[0].length;
    for(let row = 0; row < totalRows; row++) {
        for(let col = 0; col < totalCols; col++) {
            const totalLiveCellsAround = [];
            //Possible 8 directions around cell
            [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1, 1],[-1, -1]].forEach((state) => {
                const newRow = row + state[0];
                const newCol = col + state[1];
                if (newRow >= 0 && newCol >= 0 && newRow < totalRows && newCol < totalCols) {
                    if(board[newRow][newCol] === 1 || board[newRow][newCol] === 3) {
                        totalLiveCellsAround.push(true)
                    }
                }
            });
            const currentCellValue = board[row][col];
            if(currentCellValue === 0) {
                //0 dead cell
                if (totalLiveCellsAround.length === 3) {
                    board[row][col] = 2;
                }
            }else {
                //1 live cell
                if (totalLiveCellsAround.length < 2) {
                    board[row][col] = 3;
                }

                if (totalLiveCellsAround.length > 3) {
                    board[row][col] = 3;
                }
            }
        }
    }
    for(let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            if(board[row][col] === 2) {
                board[row][col] = 1;
            }
            if(board[row][col] === 3) {
                board[row][col] = 0;
            }
        }
    }
}

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);