// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]

let calculations = 0
// const fibonacci = (n) =>
// {
//     calculations++
//     console.log('calculations:', calculations);
//     if (n < 2)
//     {
//         return n
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(4));
// time O(2^n)
// space O()


const fibonacciMaster = () =>
{
    let cache = {}
    return function fib(n)
    {
        calculations++
        if (n in cache)
        {
            return cache[n]
        } else if (n < 2)
        {
            return n
        } else
        {
            cache[n] = fib(n - 1) + fib(n - 2)
            return cache[n]
        }
    }
}
// time O(n)
// space O()

const fasterFib = fibonacciMaster()
console.log('DP', fasterFib(4));
console.log('calcu', calculations);


const fibonacciMaster2 = (n) =>
{
    let array = [0, 1]
    for (let i = 2; i <= n; i++)
    {
        array.push(array[i - 1] + array[i - 2])
    }
    return array.pop()
}
console.log(fibonacciMaster2(6));