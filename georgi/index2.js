// DFS what is the total value of connected 1?
// m = 3, n = 3
// recutangular

// set can add only key
// ht can add both values and key

// island problems on leetcode

// // traverse 
// function dfs(currentCount, rowPosition, colPositon)
// {
//     currentCount++;
//     return currentCount;
// }


// // recursion
// function dfs2(currentCount, visitedCells, matrix, rowPosition, colPositon)
// {
//     if (matrix[rowPositon][colPosition] is 1) {
//         currentCount++;
//         // then try with its neighbours if you haven't used them, 
//         return currentCount;

//     }

const grid = [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
]

function maxOfIsland(grid)
{
    let max = 0
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[0].length; j++)
        {
            if (grid[i][j] === 1)
            {
                let area = dfs(i, j)
                max = area > max ? area : max
            }
        }
    }

    function dfs(row, col)
    {
        let area = 0
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0)
        {
            return 0
        }

        grid[row][col] = 0
        area = 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1)
        return area
    }

    return max
}

console.log(maxOfIsland(grid))