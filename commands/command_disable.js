const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const listenerName = args[0]
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        message.channel.send(`Listener ${listenerName} doesn't exist`)
        return
    }
    
    individualListeners[listenerName].enabled = false
    message.channel.send(`Listener ${listenerName} has been disabled`)
}

const description = ""

const disable = new Command("disable", description, exec)
disable.executeGroup = groups.admins

module.exports = disable
