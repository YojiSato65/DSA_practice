// building hash table data structure

// class HashTable
// {
//     constructor(size)
//     {
//         this.data = new Array(size)
//     }

//     _hash(key)
//     {
//         let hash = 0
//         for (let i = 0; i < key.length; i++)
//         {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash
//     }
//     // (somehow) 0(1)

//     set(key, value)
//     {
//         let address = this._hash(key)
//         if (!this.data[address])
//         {
//             this.data[address] = []
//         }
//         this.data[address].push([key, value])
//         return this.data
//     }
//     // 0(1)

//     get(key)
//     {
//         let address = this._hash(key)
//         const currentBucket = this.data[address]
//         if (currentBucket)
//         {
//             for (let i = 0; i < currentBucket.length; i++)
//             {
//                 if (currentBucket[i][0] === key)
//                     return currentBucket[i][1]
//             }
//         }
//         return undefined
//     }
//     // 0(1) if size is big enough, otherwise 0(n)

//     keys()
//     {
//         if (!this.data.length) return undefined

//         const keysArray = []
//         for (let i = 0; i < this.data.length; i++)
//         {
//             if (this.data[i])
//             {
//                 // console.log(this.data[i])
//                 keysArray.push(this.data[i][0][0])
//             }
//         }
//         return keysArray
//     }
// }
// const myHashTable = new HashTable(50)
// console.log(myHashTable.set('grapes', 10000));
// console.log(myHashTable.set('apples', 10));
// console.log(myHashTable.set('oranges', 5));
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.keys());






//Google Question
// const array = [2, 5, 5, 2, 3, 5, 1, 2, 4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// naive
// function firstRecurringCharacter(input)
// {
//     for (let i = 0; i < input.length; i++)
//     {
//         for (let j = i + 1; j < input.length; j++)
//         {
//             if (input[i] === input[j])
//                 return input[i]
//         }
//     }
//     return undefined
// }
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
// 0(n^2)


// using hash table
// function firstRecurringCharacter2(input)
// {
//     let map = {}
//     for (let i = 0; i < input.length; i++)
//     {
//         console.log(map);
//         if (map[input[i]] !== undefined)
//         {
//             return input[i]
//         } else
//         {
//             map[input[i]] = i
//         }
//     }
//     return undefined
// }
// console.log(firstRecurringCharacter2([2, 5, 4, 6, 3, 5, 1, 2, 4]));
// 0(1)
