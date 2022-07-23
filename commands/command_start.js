const {Command} = require("./Command.js")
const {schedules, addSchedule} = require("../schedules/schedules.js")
const {parseArguments} = require("../helper/timeArgs.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const scheduleName = args[0]
    const {timeObject, remainingArgs} = parseArguments(args.slice(1))

    
    
    if(!schedules.hasOwnProperty(scheduleName)) {
        return {
	    string: `Schedule ${scheduleName} doesn't exist`
	};
    }
    
    addSchedule(timeObject, scheduleName, remainingArgs, message)
    return {
	string: `Schedule ${scheduleName} has been started`
    };
}

const description = ""

const start = new Command("start", description, exec)
start.executeGroup = groups.admins

module.exports = start
