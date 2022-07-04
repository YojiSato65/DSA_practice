// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const nums = [1, 1, 2, 2, 9]
// function singleNumber(nums)
// {
//     let ht = {}
//     for (let i = 0; i < nums.length; i++)
//     {
//         ht[nums[i]] = ht[nums[i]] + 1 || 1
//         console.log('ht', ht);
//     }
//     // for (num of nums)
//     // {
//     //     ht[num] = ht[num] + 1 || 1
//     //     console.log('ht', ht);
//     // }
//     // for (const key of nums)
//     // {
//     //     if (ht[key] === 1)
//     //     {
//     //         return key
//     //     }
//     // }
//     for (let j = 0; j < nums.length; j++)
//     {
//         console.log('ht[nums[j]]', ht[nums[j]]);
//         if (ht[nums[j]] === 1)
//         {
//             return nums[j]
//         }
//     }
// }



var singleNumber = function (nums)
{
    var result = nums[0];
    for (var i = 1; i < nums.length; i++)
    {
        result = result ^ nums[i];
        console.log('result', result);
    }
    return result;
};
console.log(singleNumber(nums));