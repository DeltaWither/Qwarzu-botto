const {Command} = require("./Command.js")
const {schedulesQueue} = require("../schedules/schedules.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    let listSize = args[0]
    if (!args[0]) {
        listSize = 10
    }
    
    const initialList = schedulesQueue.traverseTree().slice(0, listSize)
    if (!initialList[0]) {
        return {
	    string: "No schedules running"
	};
    }
    
    const list = getNextScheduleList(initialList, listSize)
    
    let string = "```\nNext schedules: "
    for (schedule of list) {
        string += "\nId: " + schedule.value.id + "  creator: " + schedule.value.message.author.username + "  schedule: " + schedule.value.schedule.name
    }
    string += "\n```"
    
    return {
	string: string,
	useful: list
    };
}

const getNextScheduleList = (initialList, listSize) => {
    const list = []
    for (let i = 0; i < listSize; i++) {
        //get schedule with smallest key
        const index = getNextScheduleIndex(initialList)
        const nextSchedule = initialList[index]
        if (nextSchedule.key === 9e99) {
            break
        }
        
        list[i] = nextSchedule
        
        //replace it in initialList with the next
        if (nextSchedule.value.amount === 1) {
            initialList[index] = {
                key: 9e99
            }
            continue
        }
        const newSchedule = createNewSchedule(nextSchedule)
        initialList[index] = newSchedule
    }
    
    return list
}

const getNextScheduleIndex = (initialList) => {
    let smallestKey = 9e99
    let index
    for (scheduleIndex in initialList) {
        const currentSchedule = initialList[scheduleIndex]
        if (currentSchedule.key <= smallestKey) {
            smallestKey = currentSchedule.key
            index = scheduleIndex
        }
    }
    
    return index
}

const createNewSchedule = (nextSchedule) => {
    const newSchedule = {
            key: nextSchedule.value.next(),
            value: {
                next: nextSchedule.value.next,
                time: nextSchedule.value.time,
                amount: nextSchedule.value.amount - 1,
                interval: nextSchedule.value.interval,
                id: nextSchedule.value.id,
                args: nextSchedule.value.args,
                message: nextSchedule.value.message,
                schedule: nextSchedule.value.schedule
            }
        }
        newSchedule.key = newSchedule.value.next()
        newSchedule.value.time = newSchedule.key
    return newSchedule
}


const description = `Usage: ?running
       ?running [amount]

Shows the next schedules to be executed in order. The default amount is 10.`;

const running = new Command("running", description, exec)
running.executeGroup = groups.admins
running.parent = "system";

module.exports = running
