//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare: 
// BFS(DFS will take more time)

//If the tree is very wide:
// DFS(BFS will need too much memory)

//If solutions are frequent but located deep in the tree:
// DFS

//Determining whether a path exists between two nodes:
// DFS

//Finding the shortest path:
// BFS







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

    breadthFirstSearch()
    {
        let currentNode = this.root
        let list = []
        let queue = []
        queue.push(currentNode)

        while (queue.length > 0)
        {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left)
            {
                queue.push(currentNode.left)
            }
            if (currentNode.right)
            {
                queue.push(currentNode.right)
            }
        }
        return list
    }
    breadthFirstSearchR(queue, list)
    {
        if (!queue.length)
        {
            return list
        }

        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left)
        {
            queue.push(currentNode.left)
        }
        if (currentNode.right)
        {
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchR(queue, list)
    }

    DFSInOrder()
    {
        return traverseInOrder(this.root, [])
    }
    DFSPostOrder()
    {
        return traversePostOrder(this.root, [])
    }
    DFSPreOrder()
    {
        return traversePreOrder(this.root, [])
    }
}

function traverseInOrder(node, list)
{
    if (node.left)
    {
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if (node.right)
    {
        traverseInOrder(node.right, list)
    }
    return list
}
function traversePreOrder(node, list)
{
    list.push(node.value)
    if (node.left)
    {
        traversePreOrder(node.left, list)
    }
    if (node.right)
    {
        traversePreOrder(node.right, list)
    }
    return list
}
function traversePostOrder(node, list)
{
    if (node.left)
    {
        traversePostOrder(node.left, list)
    }
    if (node.right)
    {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
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

// console.log(myTree.breadthFirstSearch());
// console.log(myTree.breadthFirstSearchR([myTree.root], [list]));
// console.log(myTree.DFSInOrder());