const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const listenerName = args[0]
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        message.channel.send(`Listener ${listenerName} doesn't exist`)
        return
    }
    
    individualListeners[listenerName].enabled = true
    message.channel.send(`Listener ${listenerName} has been enabled`)
}

const description = ""

const enable = new Command("enable", description, exec)
enable.executeGroup = groups.admins

module.exports = enable
