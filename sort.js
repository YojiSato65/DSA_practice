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

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array)
// {
//     if (array.length === 1)
//     {
//         return array
//     }
//     // Split Array in into right and left
//     const length = array.length
//     const middle = Math.floor(length / 2)
//     const left = array.slice(0, middle)
//     const right = array.slice(middle)
//     // console.log(left);
//     // console.log(right);

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     )
// }

// function merge(left, right)
// {
//     const result = []
//     let leftIndex = 0
//     let rightIndex = 0
//     while (leftIndex < left.length && rightIndex < right.length)
//     {
//         if (left[leftIndex] < right[rightIndex])
//         {
//             result.push(left[leftIndex])
//             leftIndex++
//         } else
//         {
//             result.push(right[rightIndex])
//             rightIndex++

//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }


// const answer = mergeSort(numbers);
// console.log(answer);







// quick sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(array, left, right)
// {
//     const len = array.length;
//     let pivot;
//     let partitionIndex;

//     if (left < right)
//     {
//         pivot = right;
//         partitionIndex = partition(array, pivot, left, right);

//         //sort left and right
//         quickSort(array, left, partitionIndex - 1);
//         quickSort(array, partitionIndex + 1, right);
//     }
//     return array;
// }

// function partition(array, pivot, left, right)
// {
//     let pivotValue = array[pivot];
//     let partitionIndex = left;

//     for (let i = left; i < right; i++)
//     {
//         if (array[i] < pivotValue)
//         {
//             swap(array, i, partitionIndex);
//             partitionIndex++;
//         }
//     }
//     swap(array, right, partitionIndex);
//     return partitionIndex;
// }

// function swap(array, firstIndex, secondIndex)
// {
//     var temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
// }

// //Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);







// Interview questions

//#1 - Sort 10 schools around your house by distance:
// Insertion sort

//#2 - eBay sorts listings by the current Bid amount:
// merge sort (my answer)
// radix or counting sort

//#3 - Sport scores on ESPN
// quick sort(sorted score, merge sort will be too much in terms of memory)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort(sort externally, O (n log n))

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion sort

//#6 - Temperature Records for the past 50 years in Canada
// quick sort(if there is decimal numbers)
// radix sort, counting sort(if there is no decimal number)

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort(if we have enough memory), quick sort(to save memory space)

//#8 - You want to teach sorting for the first time
// bubble sort, selection sort
