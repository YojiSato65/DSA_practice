// reverse a string

// const string = 'Hi my name is Yoji'

// const reverseString = (str) =>
// {
//     return string.split('').reverse().join('')
// }

// console.log(reverseString(string));




// merge sorted arrays

// const arr1 = [0, 3, 4, 31]
// const arr2 = [4, 6, 30]

// const mergeSortedArrays = (arr1, arr2) =>
// {
//     if (arr1.length === 0) return arr2
//     if (arr2.length === 0) return arr1

//     const newArr = []
//     let arr1Item = arr1[0]
//     let arr2Item = arr2[0]
//     let i = 1
//     let j = 1

//     while (arr1Item || arr2Item)
//     {
//         if (!arr2Item || arr1Item < arr2Item)
//         {
//             newArr.push(arr1Item)
//             arr1Item = arr1[i]
//             i++
//         } else
//         {
//             newArr.push(arr2Item)
//             arr2Item = arr2[j]
//             j++
//         }
//     }
//     return newArr
// }

// console.log(mergeSortedArrays(arr1, arr2));




// Building array data structure

// class MyArray
// {
//     constructor()
//     {
//         this.length = 0
//         this.data = {};
//     }
//     get(index)
//     {
//         return this.data[index]
//     }
//     push(item)
//     {
//         this.data[this.length] = item
//         this.length++
//         return this.data
//     }
//     pop()
//     {
//         const lastItem = this.data[this.length - 1]
//         delete this.data[this.length - 1]
//         this.length--
//         return lastItem
//     }
//     deleteAtIndex(index)
//     {
//         const item = this.data[index]
//         this.shiftItems(index)
//         return item
//     }
//     shiftItems(index)
//     {
//         for (let i = index; i < this.length - 1; i++)
//         {
//             this.data[i] = this.data[i + 1]
//         }
//         delete this.data[this.length - 1]
//         this.length--
//     }
// }
// const myArray = new MyArray()
// console.log(myArray.push('hey'));
// console.log(myArray.push('yo'));
// console.log(myArray.push('arrrara'));
// console.log(myArray.push('ah!'));
// console.log(myArray.get(1));
// console.log(myArray.pop());
// console.log(myArray.shiftItems(1));
// console.log(myArray);