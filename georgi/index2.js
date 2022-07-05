// DFS
// m = 3, n = 3
// recutangular
[
    [0, 0, 0],
    [1, 0, 1],
    [1, 0, 0],
]
// set has only key
// ht has values and key

// island something on leetcode



// traverse 
function dfs(currentCount, rowPosition, colPositon)
{
    currentCount++;
    return currentCount;
}


// recursion
function dfs2(currentCount, visitedCells, matrix, rowPosition, colPositon)
{
    if (matrix[rowPositon][colPosition] is 1) {
        currentCount++;
        // then try with its neighbours if you haven't used them, 
        return currentCount;

    }