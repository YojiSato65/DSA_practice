// creating SLL

class LinkedList
{
    constructor(value)
    {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value)
    {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value)
    {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    printList()
    {
        let array = []
        let currNode = this.head
        while (currNode !== null)
        {
            array.push(currNode.value)
            currNode = currNode.next
        }
        return array
    }
    insert(index, value)
    {
        if (index >= this.length)
        {
            return this.append(value)
        }
        if (index === 0)
        {
            return this.prepend(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traversalToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer

        return this
    }
    traversalToIndex(index)
    {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index)
        {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    remove(index)
    {
        if (index > this.length)
        {
            return undefined
        }
        const leader = this.traversalToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--

        return this
    }
    reverse()
    {
        if (!this.head.next)
        {
            return this
        }
        let first = this.head
        console.log('first - before while', first);
        this.tail = this.head
        let second = first.next
        console.log('second - before while', second);
        while (second)
        {
            const temp = second.next
            console.log('1.temp - inside while', temp);
            second.next = first
            console.log('2.second.next - inside while', second.next);
            first = second
            console.log('3.first - inside while', first);
            second = temp
            console.log('4.second - inside while', second);
        }
        this.head.next = null
        this.head = first

    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(100, 99)
myLinkedList.insert(2, 999)
myLinkedList.remove(2)
console.log(myLinkedList.printList());
myLinkedList.reverse()
console.log(myLinkedList.printList());




// create dll

// class DoublyLinkedList
// {
//     constructor(value)
//     {
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head
//         this.length = 1
//     }

//     append(value)
//     {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         newNode.prev = this.tail
//         this.tail.next = newNode
//         this.tail = newNode
//         this.length++
//         return this
//     }
//     prepend(value)
//     {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         newNode.next = this.head
//         this.head.prev = newNode
//         this.head = newNode
//         this.length++
//         return this
//     }
//     printList()
//     {
//         let array = []
//         let currNode = this.head
//         while (currNode !== null)
//         {
//             array.push(currNode.value)
//             currNode = currNode.next
//         }
//         return array
//     }
//     insert(index, value)
//     {
//         if (index >= this.length)
//         {
//             return this.append(value)
//         }
//         if (index === 0)
//         {
//             return this.prepend(value)
//         }
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         const leader = this.traversalToIndex(index - 1)
//         const follower = leader.next
//         leader.next = newNode
//         newNode.prev = leader
//         newNode.next = follower
//         follower.prev = newNode

//         return this
//     }
//     traversalToIndex(index)
//     {
//         let counter = 0;
//         let currentNode = this.head
//         while (counter !== index)
//         {
//             currentNode = currentNode.next
//             counter++
//         }
//         return currentNode
//     }
//     remove(index)
//     {
//         if (index > this.length)
//         {
//             return undefined
//         }
//         const leader = this.traversalToIndex(index - 1)
//         const follower = leader.next
//         const unwantedNode = leader.next
//         leader.next = unwantedNode.next
//         unwantedNode.next = follower
//         follower.prev = unwantedNode.prev
//         unwantedNode.prev = leader

//         this.length--
//         console.log(this)
//         return this
//     }
// }

// const myLinkedList = new DoublyLinkedList(10)
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(100, 99)
// myLinkedList.insert(2, 999)
// myLinkedList.remove(2)
// console.log(myLinkedList.printList());
