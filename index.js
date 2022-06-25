// console.log(2 == '2'); console.log(2 === '2')

// let listOfNumbers = [2, 3, 5, 7, 11]
// console.log(listOfNumbers[6]);

// const myArray = [1, 2, 3, 4, 5, 1, 6]
// console.log(myArray.lastIndexOf(1)); // 5
// console.log(myArray.indexOf(1)); // 5


// let now = new Date()
// // now.getFullYear()
// now.getMonth()
// // now.getDate()

// console.log(now);

const obj = {
    name: 'john',
    jobs: ['teacher', 'student'],
    myMethod: () =>
    {
        this.jobs.forEach(job => console.log(`my name is ${obj.name}, i am ${job}`))
    }
}
console.log(obj.myMethod());