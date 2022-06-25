// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number)
{
    //code here
    if (number === 2)
    {
        return 2
    }
    return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(6));

function findFactorialIterative(number)
{
    //code here
    let answer = 1
    for (let i = 2; i <= number; i++)
    {
        answer = answer * i
    }
    return answer;
}
console.log(findFactorialIterative(5));

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 =20
// 5 * 5 = 25

// 1 * 2 * 3 * 4 * 5 = 120
