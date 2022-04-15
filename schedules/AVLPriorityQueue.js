/*
 * This is mostly a priority queue made to handle the schedules. 
 * It has push(), pop() and peek() like a priority queue would, but it also has remove() and is more ordered than a minheap, which will help with showing the next schedules to be executed in order.
 * 
 * https://en.wikipedia.org/wiki/AVL_tree
 */ 

class AVLNode {
    constructor(timeObject) {
        this.timeObject = timeObject
        this.balance = 0
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
    
//     calculateHeight() {
//         let leftHeight = -1
//         let rightHeight = -1
//         if (this.left !== null) {
//             left = this.left.calculateHeight()
//         }
//         if (this.right !== null) {
//             right = this.right.calculateHeight()
//         }
//         
//         this.height = Math.max(left, right) + 1
//         return this.height
//     }
}

// class AVLPriorityQueue {
//     constructor() {
//         this.root = null
//     }
//     
//     outputs the node with a certain timestamp and its parent
//     private traverse(timeStamp) {
//         let currentNode = this.root
//         let parentNode = null
//         
//         while (true) {
//             const currentTime = currentNode.timeObject.time
//             if (currentNode === null) {
//                 return null
//             }
//             if (timeStamp === currentTime) {
//                 return {currentNode: currentNode, parentNode: parentNode}
//             }
//             
//             parentNode = currentNode
//             if (timeStamp > currentTime) {
//                 currentNode = currentNode.right
//             } else {
//                 currentNode = currentNode.left
//             }
//         }
//     }
//     
//     public getNextGreater(timeStamp) {
//         let nextGreater = null
//         const node = traverse(timeStamp).currentNode
//         if (node === null) {
//             return
//         }
//         
//         if (node.right !== null) {
//             one to the right, then all the way to the left
//             nextGreater = node.right
//             while (nextGreater.left !== null) {
//                 nextGreater = nextGreater.left
//             }
//             return nextGreater
//         }
//         
//         if node.right doesn't exist then go through all the parents to the left and then one to the right
//         while (node.parent !== null && node === node.parent.right) {
//             nextGreater = node.parent
//         }
//         if (node.parent !== null) {
//             nextGreater = node.parent
//         }
//         
//         return nextGreater
//     }
//     
//     private insert(timeObject) {
//         let createdNode = null
//         
//         if (this.root === null) {
//             this.root = new AVLNode(timeObject)
//             createdNode = this.root
//         }
//         
//         const nodes = traverse(timeObject.time)
//         if (nodes.currentNode === null) {
//             const parentTime = nodes.parentNode.timeObject.time
//             
//             if (timeObject.time > parentTime) {
//                 nodes.parent.right = new AVLNode(timeObject)
//                 createdNode = nodes.parent.right
//             }
//             
//             if (timeObject.time < parentTime) {
//                 nodes.parent.left = new AVLNode(timeObject)
//                 createdNode = nodes.parent.left
//             }
//             
//             createdNode.parent = nodes.parent
//         }
//         
//         return createdNode
//     }
//     
//     private remove(timeStamp) {
//         let deletedNode = null
//         
//         const nodes = traverse(timeStamp)
//         const currentNode = nodes.currentNode
//         const parentNode = nodes.parentNode
//         
//         if (currentNode !== null) {
//             deletedNode = currentNode
//             
//             if (currentNode = parentNode.left) {
//                 delete parentNode.left
//             } else {
//                 delete parentNode.right
//             }
//         }
//         
//         
//         return deletedNode
//     }
//     
// }
