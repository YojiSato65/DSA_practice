class Node
{
    constructor(value)
    {
        this.right = null
        this.left = null
        this.value = value
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null
    }
    insert(value)
    {
        const newNode = new Node(value)
        if (this.root === null)
        {
            this.root = newNode
        }
        else
        {
            let currentNode = this.root
            // left
            if (value < currentNode.value)
            {
                while (true)
                {
                    if (!currentNode.left)
                    {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode.left = currentNode
                }
            } else
            {
                // right
                while (true)
                {
                    if (!currentNode.right)
                    {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode.right = currentNode
                }
            }

        }
    }

    lookup(value)
    {
        if (!this.root)
        {
            return false
        }
        const currentNode = this.root
        while (currentNode)
        {
            if (value < currentNode.value)
            {
                currentNode = currentNode.left
            } else if (value > currentNode.value)
            {
                currentNode = currentNode.right
            } else if (value === currentNode.value)
            {
                return currentNode
            }
        }
        return false
    }
}

function traverse(node)
{
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}

const myTree = new BinarySearchTree()
myTree.insert(9)
myTree.insert(4)
myTree.insert(20)
myTree.insert(1)
myTree.insert(6)
myTree.insert(15)
myTree.insert(170)

console.log(JSON.stringify(traverse(myTree.root)))