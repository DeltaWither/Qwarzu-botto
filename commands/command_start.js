const {Command} = require("./Command.js")
const {schedules, addSchedule} = require("../schedules/schedules.js")
const {parseArguments} = require("../helper/timeArgs.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const scheduleName = args[0]
    const {timeObject, remainingArgs} = parseArguments(args.slice(1))

    
    
    if(!schedules.hasOwnProperty(scheduleName)) {
        message.channel.send(`Schedule ${scheduleName} doesn't exist`)
        return
    }
    
    addSchedule(timeObject, scheduleName, remainingArgs, message)
    message.channel.send(`Schedule ${scheduleName} has been started`)
}

const description = ""

const start = new Command("start", description, exec)
start.executeGroup = groups.admins

module.exports = start
