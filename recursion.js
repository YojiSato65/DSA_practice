// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// function findFactorialRecursive(number)
// {
//     //code here
//     if (number === 2)
//     {
//         return 2
//     }
//     return number * findFactorialRecursive(number - 1);
// }
// console.log(findFactorialRecursive(6));

// function findFactorialIterative(number)
// {
//     //code here
//     let answer = 1
//     for (let i = 2; i <= number; i++)
//     {
//         answer = answer * i
//     }
//     return answer;
// }
// console.log(findFactorialIterative(5));







// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// function fibonacciIterative(n)
// {
//     let arr = [0, 1]
//     for (let i = 2; i <= n; i++)
//     {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr[n]
// }
// console.log(fibonacciIterative(8))

// function fibonacciRecursive(n)
// {
//     if (n < 2)
//     {
//         return n
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// }

// console.log(fibonacciRecursive(8))









//Implement a function that reverses a string using iteration...and then recursion!
//should return: 'yretsam oyoy'
// function reverseStringIte(str)
// {
//     let newStr = []
//     let length = str.length - 1
//     for (let i = length; i === 0; i--)
//     {
//         newStr.push(str[i])
//     }
//     return newStr

//     // return str.split('').reverse().join('')
// }

// console.log(reverseStringIte('yoyo mastery'))

function reverseString(str)
{
    let arrayStr = str.split("");
    let reversedArray = [];
    // console.log('arrayStr', arrayStr);
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array)
    {
        if (array.length > 0)
        {
            reversedArray.push(array.pop());
            addToArray(array);
            // console.log('reversedArray', reversedArray);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
}

console.log(reverseString('yoyo master'));





function reverseStringRec(str)
{
    if (str === "")
    {
        return "";
    } else
    {
        return reverseStringRec(str.slice(1)) + str.charAt(0);
    }
}

console.log(reverseStringRec('yoyo mastery'))


// let string = 'hello'
// console.log(string.slice(1) + string.charAt(0));