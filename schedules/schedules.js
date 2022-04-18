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
    const timeObject = nextSchedule.value
    const oldTime = timeObject.time
    
    setTimeout(() => {
        // remove and reinsert
        schedulesQueue.pop()
        timeObject.time = timeObject.next()
        if (timeObject.amount !== null) {
            timeObject.amount--
        }
        if (timeObject.amount > 0 || timeObject.amount === null) {
            addSchedule(timeObject, timeObject.schedule.name, timeObject.args, timeObject.message)
        }
        
        
        // Execute after pushing back so if any schedule needs to look at the queue it doesn't just look at itself
        timeObject.schedule.fullyWrappedExec(timeObject.message, timeObject.args, oldTime)
        if (schedulesQueue.root === null) {
            queueActive = false
        }
        if (schedulesQueue.root !== null) {
            startQueue()
        }
    }, nextSchedule.key - Date.now())
}

const pokeQueue = () => {
    if (!queueActive) {
        startQueue()
    }
}

const addSchedule = (timeObject, scheduleName, args, message) => {
    if (timeObject.amount === 0) {
        return
    }
    
    timeObject.schedule = scheduleList[scheduleName]
    timeObject.args = args
    timeObject.message = message
    
    if (schedulesQueue.root === null) {
        schedulesQueue.push(timeObject.time + Math.random(), timeObject)
        pokeQueue()
    } else {
        schedulesQueue.push(timeObject.time + Math.random(), timeObject)
        pokeQueue()
    }
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
