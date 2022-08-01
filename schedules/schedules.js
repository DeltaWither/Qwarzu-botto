const fs = require("fs")
const AVLPriorityQueue= require("./AVLPriorityQueue.js")

const scheduleList = {};
const schedulesQueue = new AVLPriorityQueue();

const schedulesIdMap = {};

/*
 * Each node has key: timeStamp + random()
 * The random is to separate those with same timeStamp
 * value: {
 *      time: 1341351345325
 *      amount: 23
 *      next: () => {...} returning the next object with amount-1 new Timestamp
 *      exec: () => {...} function that gets executed
 *      args: arguments for the function
 *      id: its id that doesn't change unlike the key
 * }
 */
let timeout = null
const startQueue = async () => {
    const nextSchedule = schedulesQueue.peek()
    if (nextSchedule === null) {
        timeout = null
        return
    }
    
    const timeObject = nextSchedule.value
    const oldTime = timeObject.time
    
    timeout = setTimeout(() => {
        reinsertNextSchedule()
        
        // Execute after pushing back so if any schedule needs to look at the queue it doesn't just look at itself
	// Also check that it wasn't delayed for too long to avoid spamming schedules?running
	if (Date.now() - oldTime < timeObject.interval) {
	    timeObject.schedule.fullyWrappedExec(timeObject.message, timeObject.args, timeObject)
	}
	startQueue()
    }, nextSchedule.key - Date.now())
}

const updateMapAndQueue = (timeObject) => {
    const key = timeObject.time + Math.random()
    schedulesQueue.push(key, timeObject)
    schedulesIdMap[timeObject.id] = key
}

const reinsertNextSchedule = () => {
    const timeObject = schedulesQueue.pop().value
    timeObject.time = timeObject.next()
    if (timeObject.amount !== null) {
        timeObject.amount--
        
        if (timeObject.amount <= 0) {
	    delete schedulesIdMap[timeObject.id]
	    return
        }
    }
    
    updateMapAndQueue(timeObject)
}

const removeSchedule = (scheduleId) => {
    const key = schedulesIdMap[scheduleId]
    const peek = schedulesQueue.peek()
    
    const removed = schedulesQueue.remove(key)
    delete schedulesIdMap[scheduleId]
    
    // Restart if the next schedule is the removed one
    if (key === peek.key) {
        clearTimeoutWrapped()
        startQueue()
    }
    
    if (removed !== null) {
        return true
    }
    return false
}

// addSchedule must be called ONLY to insert NEW schedules, not reinsert
const addSchedule = (timeObject, scheduleName, args, message) => {
    if (timeObject.amount <= 0 && timeObject.amount !== null) {
        return
    }
    
    // fields that aren't set when the arguments are parsed
    timeObject.schedule = scheduleList[scheduleName]
    timeObject.args = args
    timeObject.message = message
    timeObject.id = Date.now().toString() + Math.floor(Math.random() * 1000).toString()
    
    updateMapAndQueue(timeObject)
    
    clearTimeoutWrapped()
    startQueue()
}

const clearTimeoutWrapped = () => {
    clearTimeout(timeout)
    timeout = null
}


const loadSchedules = () => {
    const files = fs.readdirSync("./schedules");

    for (const fileIndex in files) {
	if(files[fileIndex].startsWith("schedule_")) {
            const schedule = require("./" + files[fileIndex])
            scheduleList[schedule.name] = schedule
	}
    }
}

module.exports = {
    "schedules": scheduleList,
    "schedulesQueue": schedulesQueue,
    "addSchedule": addSchedule,
    "removeSchedule": removeSchedule,
    "loadSchedules": loadSchedules
}
