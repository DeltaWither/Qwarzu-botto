/*
 * This is mostly a priority queue made to handle the schedules. 
 * It has push(), pop() and peek() like a priority queue would, but it also has remove() and is more ordered than a minheap, which will help with showing the next schedules to be executed in order.
 * 
 * https://en.wikipedia.org/wiki/AVL_tree
 */ 

class AVLNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.height = 0
        this.left = null
        this.right = null
        this.parent = null
    }
    
    isLeaf() {
        if (this.left === null && this.right === null) {
            return true
        }
        return false
    }
    
    onlyHasLeft() {
        if (this.left !== null && this.right === null) {
            return true
        }
        return false
    }
    
    onlyHasRight() {
        if (this.left === null && this.right !== null) {
            return true
        }
        return false
    }
    
    get balance() {
        let leftHeight = -1
        let rightHeight = -1
        if (this.left !== null) {
            leftHeight = this.left.height
        }
        if (this.right !== null) {
            rightHeight = this.right.height
        }
        
        return rightHeight - leftHeight
    }
    
//     static propagateBackwards(node, func) {
//         let currentNode = node
//         func(currentNode)
//         while (currentNode.parent !== null) {
//             currentNode = currentNode.parent
//             func(currentNode)
//         }
//     }
    
    calculateHeight() {
        let leftHeight = -1
        let rightHeight = -1
        if (this.left !== null) {
            leftHeight = this.left.height
        }
        if (this.right !== null) {
            rightHeight = this.right.height
        }
        
        this.height = Math.max(leftHeight, rightHeight) + 1
    }
}

const getLastElement = (array) => {
    return array.slice(-1)[0]
}


class AVLPriorityQueue {
    constructor() {
        this.root = null
    }
    
    // outputs array with all nodes from root to the last one
    #traverse(key) {
        let currentNode = this.root
        let nodeArray = []
        let index = -1
        
        while (true) {
            index++
            nodeArray[index] = currentNode
            
            if (currentNode === null) {
                return nodeArray
            }
            
            const currentKey = currentNode.key
            
            if (key === currentKey) {
                return nodeArray
            }
            
            if (key > currentKey) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
    }
    
    #getNextGreaterCase1(node) {
        let nextGreater = node.right
        while (nextGreater.left !== null) {
            nextGreater = nextGreater.left
        }
        return nextGreater
    }
    
    #getNextGreaterCase2(node) {
        let nextGreater = node
        while (nextGreater.parent !== null && nextGreater === nextGreater.parent.right) {
            nextGreater = nextGreater.parent
        }
        
        // if nextGreater has a parent it must be its left child. Otherwise it's root and there's no next greater
        return nextGreater.parent
    }
    
    getNextGreater(key) {
        const node = getLastElement(this.#traverse(key))
        if (node === null) {
            return null
        }
        
        if (node.right !== null) {
            // one to the right, then all the way to the left
            return this.#getNextGreaterCase1(node)
        }
        
        // if node.right doesn't exist then go through all the parents to the left and then one to the right
        return this.#getNextGreaterCase2(node)
    }
    
    #insertRoot(key, value) {
        this.root = new AVLNode(key, value)
        return this.root
    }
    
    #insertAt(parent, key, value) {
        const parentKey = parent.key
        let createdNode
        
        if (key > parentKey) {
            parent.right = new AVLNode(key, value)
            createdNode = parent.right
        }
        if (key < parentKey) {
            parent.left = new AVLNode(key, value)
            createdNode = parent.left
        }
        
        createdNode.parent = parent
        return createdNode
    }
    
    insert(key, value) {
        if (this.root === null) {
            return this.#insertRoot(key, value)
        }
        
        const nodes = this.#traverse(key)
        const currentNode = getLastElement(nodes)
        if (currentNode === null) {
            const parentNode = nodes.slice(-2)[0]
            return this.#insertAt(parentNode, key, value)
        }
    }
    
    #removeLeafAt(parentNode, currentNode) {
        if (currentNode = parentNode.left) {
            parentNode.left = null
        } else {
            parentNode.right = null
        }
    }
    
    #removeWithOneChildAt(parentNode, currentNode, direction) {
        const childNode = currentNode[direction]
        
        if (currentNode = parentNode.left) {
            parentNode.left = childNode
        } else {
            parentNode.right = childNode
        }
        
        childNode.parent = parentNode
    }
    
    #removeWithBothChildrenAt(parentNode, currentNode) {
        nextGreater = this.getNextGreater(currentNode.key)
        
        // remove the next greater node from its position and make it replace currentNode completely
        this.remove(nextGreater.key)
        nextGreater.left = currentNode.left
        nextGreater.right = currentNode.right
        nextGreater.parent = currentNode.parent
        
        nextGreater.left.parent = nextGreater
        nextGreater.right.parent = nextGreater
        
        if (currentNode = parentNode.left) {
            parentNode.left = nextGreater
        } else {
            parentNode.right = nextGreater
        }
    }
    
    #removeAt(parentNode, currentNode) {
        if (currentNode.isLeaf()) {
            console.log(currentNode)
            this.#removeLeafAt(parentNode, currentNode)
        } else if (currentNode.onlyHasLeft()) {
            this.#removeWithOneChildAt(parentNode, currentNode, "left")
        } else if (currentNode.onlyHasRight()) {
            this.#removeWithOneChildAt(parentNode, currentNode, "right")
        } else {
            this.#removeWithBothChildrenAt(parentNode, currentNode)
        }
    }
    
    remove(key) {
        const nodes = this.#traverse(key)
        const currentNode = getLastElement(nodes)
        
        if (currentNode !== null) {
            const parentNode = currentNode.parent
            this.#removeAt(parentNode, currentNode)
            return currentNode
        }
        
        return null
    }
    
    
}


module.exports = AVLPriorityQueue
