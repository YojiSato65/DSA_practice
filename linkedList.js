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
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(100, 99)
myLinkedList.insert(2, 999)
myLinkedList.remove(2)
console.log(myLinkedList.printList());