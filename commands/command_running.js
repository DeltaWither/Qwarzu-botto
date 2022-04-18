const {Command} = require("./Command.js")
const {schedulesQueue} = require("../schedules/schedules.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const listSize = args[0]
    if (!args[0]) {
        return
    }
    const initialList = schedulesQueue.traverseTree().slice(0, listSize)
//     const list = []
//     
//     for (let i = 0; i < listSize; i++) {
//         include commands after the .next() is executed
//     }
    
    let string = "Next schedules: "
    for (schedule of initialList) {
        string = string + "\n" + schedule.value.id
    }
    
    message.channel.send(string)
}

const description = ""

const running = new Command("running", description, exec)
running.executeGroup = groups.admins

module.exports = running
