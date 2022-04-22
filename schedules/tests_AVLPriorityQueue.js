const AVLPriorityQueue = require("./AVLPriorityQueue.js")

const test = (v1, v2, testNumber) => {
    if (v1 === null || v2 === null) {
        if (v1 !== v2) {
            console.log("fail in test " + testNumber)
        } else {
            console.log("success in test " + testNumber)
            return
        }
    }
    
    if (v1.key !== v2.key || v1.value !== v2.value) {
        console.log("fail in test " + testNumber)
    } else {
        console.log("success in test " + testNumber)
    }
}

const queue = new AVLPriorityQueue()

queue.push(1, "hi")
test(queue.peek(), {key: 1, value: "hi"}, 1)
test(queue.pop(), {key: 1, value: "hi"}, 2)
test(queue.peek(), null, 3)

test(queue.pop(), null, 4)

queue.push(2, "hi")
queue.push(40, "hi2")
queue.push(0.2, "hi3")

test(queue.peek(), {key: 0.2, value: "hi3"}, 5)
test(queue.remove(2), {key: 2, value: "hi"}, 6)
test(queue.peek(), {key: 0.2, value: "hi3"}, 7)

// Test a bunch of rotations
const queue2 = new AVLPriorityQueue()

queue2.push(1, 1)
queue2.push(2, 2)
queue2.push(3, 3)
queue2.push(3.5, 4)
queue2.push(5, 5)
queue2.push(6, 6)

console.log(queue2.root.toString())
console.log(queue2.root.balance)
