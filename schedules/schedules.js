const fs = require("fs")
const AVLPriorityQueue= require("./AVLPriorityQueue.js")

const scheduleList = {}
const schedulesQueue = new AVLPriorityQueue()

/*
 * Each node has key: timeStamp + random()
 * The random is to separate those with same timeStamp
 * value: {
 *      time: 1341351345325
 *      amount: 23
 *      next: () => {...} returning the next object with amount-1 new Timestamp
 *      exec: () => {...} function that gets executed
 *      args: arguments for the function
 * }
 */
let queueActive = false
const startQueue = () => {
    queueActive = true
    const nextSchedule = schedulesQueue.peek()
    setTimeout(() => {
        nextSchedule.value.schedule.fullyWrappedExec(nextSchedule.value.args)
        schedulesQueue.pop()
        
        nextSchedule.value.time = nextSchedule.value.next()
        if (!nextSchedule.value.amount === null) {
            nextSchedule.value.amount -= 1
        }
        if (nextSchedule.value.amount > 0 || nextSchedule.value.amount === null) {
            
            schedulesQueue.push(nextSchedule.value.time + Math.random(), nextSchedule.value)
        }
        
        if (schedulesQueue.peek() !== null) {
            startQueue()
        } else {
            queueActive = false
        }
    }, nextSchedule.key - Date.now())
}

const pokeQueue = () => {
    if (!queueActive) {
        startQueue()
    }
}

const addSchedule = (timeObject, scheduleName, args) => {
    if (timeObject.amount === 0) {
        return
    }
    
    timeObject.schedule = scheduleList[scheduleName]
    timeObject.args = args
    
    schedulesQueue.push(timeObject.time + Math.random(), timeObject)
    pokeQueue()
}

//export the list before anything is imported into it to avoid circular dependencies
module.exports = {"schedules": scheduleList, "schedulesQueue": schedulesQueue, "addSchedule": addSchedule}

// Not sure why it has to go to ./listeners when . is already the commands folder
const files = fs.readdirSync("./schedules");

for (const fileIndex in files) {
    if(files[fileIndex].startsWith("schedule_")) {
        const schedule = require("./" + files[fileIndex])
        scheduleList[schedule.name] = schedule
    }
}
