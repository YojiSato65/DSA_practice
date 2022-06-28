// Bubble sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array)
// {
//     const length = array.length
//     for (let i = 0; i < length; i++)
//     {
//         for (let j = 0; j < length; j++)
//         {
//             if (array[j] > array[j + 1])
//             {
//                 let temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(bubbleSort(numbers));







// Selection sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array)
// {
//     const length = array.length
//     for (let i = 0; i < length - 1; i++)
//     {
//         let minIndex = i
//         for (let j = i + 1; j < length; j++)
//         {
//             if (array[minIndex] > array[j])
//             {
//                 minIndex = j
//             }
//         }
//         let temp = array[i]
//         array[i] = array[minIndex]
//         array[minIndex] = temp
//     }
//     return array
// }

// console.log(selectionSort(numbers));






// insertion sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array)
// {
//     for (let i = 1; i < array.length; i++)
//     {
//         for (let j = i; j > 0; j--)
//         {
//             if (array[j] < array[j - 1])
//             {
//                 const temp = array[j]
//                 array[j] = array[j - 1]
//                 array[j - 1] = temp
//             } else
//             {
//                 break
//             }
//         }
//     }
//     return array
// }

// console.log(insertionSort(numbers));






// merge sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array)
{
    if (array.length === 1)
    {
        return array
    }
    // Split Array in into right and left
    const length = array.length
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    // console.log(left);
    // console.log(right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right)
{
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length)
    {
        if (left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex])
            leftIndex++
        } else
        {
            result.push(right[rightIndex])
            rightIndex++

        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


const answer = mergeSort(numbers);
console.log(answer);