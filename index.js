
// naive
// const hasPairWithSum = (arr, sum) =>
// {
//     const newArr = []
//     for (let i = 0; i < arr.length - 1; i++)
//     {
//         for (let j = i + 1; j < arr.length; j++)
//         {
//             if (arr[i] + arr[j] === sum)
//             {
//                 newArr.push(arr[i], arr[j])
//                 return newArr;
//             }
//         }
//     }
//     return false
// }

// time o(n^2)
// space o(1)

// better

// const array = [1, null, 5, 3]

// const hasPairWithSum2 = (arr, sum) =>
// {
//     const mySet = new Set
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (mySet.has(arr[i]))
//         {
//             return true
//         }
//         mySet.add(sum - arr[i])
//     }
//     return false
// }

// time o(n)
// space o(n) ??

console.log(hasPairWithSum2(array, 8))
