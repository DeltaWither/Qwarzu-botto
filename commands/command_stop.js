const {Command} = require("./Command.js")
const {removeSchedule} = require("../schedules/schedules.js")
const {parseArguments} = require("../helper/timeArgs.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const scheduleId = args[0]
    
    const removed = removeSchedule(scheduleId)
    if (removed) {
        message.channel.send(`The schedule has been stopped`)
    } else {
        message.channel.send(`That schedule doesn't exist`)
    }
}

const description = ""

const stop = new Command("stop", description, exec)
stop.executeGroup = groups.admins

module.exports = stop
