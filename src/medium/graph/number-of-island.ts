
/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * Example 1:
 *
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * Example 2:
 *
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 */
type QueueType = { row: number, col: number };

/**
 * BFS algo to search all 1 and mark them as visited from start location.
 * BFS uses queue and iterate over queue and push new valid element in queue
 */
function markIslandVisitedWithBFS(startRow: number, startCol: number, grid: string[][], visited: boolean[][]){
    const queue: QueueType[] = [];
    queue.push({row: startRow, col: startCol});
    const possibleDirections = [[0,1], [0,-1], [1,0], [-1,0]];
    while(queue.length) {
        const {row, col} = queue.pop() as QueueType;
        visited[row][col] = true;
        possibleDirections.forEach((direction) => {
            let newRow = row + direction[0];
            let newCol = col + direction[1];
            if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] === '1' && !visited[newRow][newCol]) {
                queue.push({row: newRow, col: newCol});
            }
        });
    }
}

export function numIslands(grid: string[][]): number {
    //Keep track if cell is visited or not
    const visited: boolean[][] = new Array(grid.length);
    for(let i = 0; i < grid.length; i++) {
        visited[i] = new Array(grid[i].length);
    }
    let totalIslands = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1' && !visited[row][col]) {
                markIslandVisitedWithBFS(row, col, grid, visited);
                totalIslands++;
            }
        }
    }
    return totalIslands;
}

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
])); //1

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
])); //3