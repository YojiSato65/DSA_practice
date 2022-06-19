// reverse a string

// const string = 'Hi my name is Yoji'

// const reverseString = (str) =>
// {
//     return string.split('').reverse().join('')
// }

// console.log(reverseString(string));




// merge sorted arrays

const arr1 = [0, 3, 4, 31]
const arr2 = [4, 6, 30]

const mergeSortedArrays = (arr1, arr2) =>
{
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    const newArr = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1

    while (arr1Item || arr2Item)
    {
        if (!arr2Item || arr1Item < arr2Item)
        {
            newArr.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else
        {
            newArr.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }
    return newArr
}

console.log(mergeSortedArrays(arr1, arr2));