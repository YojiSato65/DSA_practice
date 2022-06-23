// class Node
// {
//     constructor(value)
//     {
//         this.value = value
//         this.next = null
//     }
// }

// class Queue
// {
//     constructor()
//     {
//         this.first = null
//         this.last = null
//         this.length = 0
//         // with array - replace those three with this:
//         // const array = []
//     }
//     peek()
//     {
//         return this.first
//         // with array - replace it with this:
//         // return this.array[this.array.length - 1]

//     }
//     enqueue(value)
//     {
//         const newNode = new Node(value)
//         if (this.length === 0)
//         {
//             this.first = newNode
//             this.last = newNode
//         } else
//         {
//             this.last.next = newNode
//             this.last = newNode
//         }
//         this.length++
//         return this
//     }
//     dequeue()
//     {
//         if (!this.first)
//         {
//             return null
//         }
//         if (this.first === this.last)
//         {
//             return this.last = null
//         }
//         const holdingPointer = this.first
//         this.first = this.first.next
//         this.length--
//         return this
//     }
// }

// const myQueue = new Queue()
// console.log(myQueue.enqueue('one'));
// console.log(myQueue.enqueue('two'));
// console.log(myQueue.enqueue('three'));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());




// implement queue using stacks

class MyQueue
{
    constructor()
    {
        this.pushStack = []
        this.popStack = []
    }

    push(value)
    {
        return this.pushStack.push(value)
    }

    pop()
    {
        if (!this.popStack.length)
        {
            while (this.pushStack.length)
            {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()
    }

    peek()
    {
        if (!this.popStack.length)
        {
            while (this.pushStack.length)
            {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]
    }

    empty()
    {
        return !this.pushStack.length && !this.popStack.length
    }
}

const myQueue = new MyQueue()
console.log(myQueue.push('one'));
console.log(myQueue.push('two'));
console.log(myQueue.push('three'));
console.log(myQueue.pop());
console.log(myQueue.peek());
console.log(myQueue.empty());


