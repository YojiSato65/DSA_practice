class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Stack
{
    constructor()
    {
        this.top = null
        this.bottom = null
        this.length = 0
        // with array - replace those three with this:
        // const array = []
    }
    peek()
    {
        return this.top
        // with array - replace it with this:
        // return this.array[this.array.length - 1]

    }
    push(value)
    {
        const newNode = new Node(value)
        if (this.length === 0)
        {
            this.top = newNode
            this.bottom = newNode
        } else
        {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
    pop()
    {
        if (!this.top)
        {
            return null
        }
        if (this.top === this.bottom)
        {
            return this.bottom = null
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return this
    }
}

const myStack = new Stack()
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
