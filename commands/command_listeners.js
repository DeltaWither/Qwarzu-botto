const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    listenersString = "```diff\n"
    for (listener in individualListeners) {
        let status
        if(individualListeners[listener].enabled) {
            status = "+"
        } else {
            status = "-"
        }
        
        listenersString = listenersString + status + listener + "\n";
    }
    listenersString = listenersString + "```"
    
    message.channel.send(listenersString)
}
const description = "List all listeners"

const listeners = new Command("listeners", description, exec)
listeners.executeGroup = groups.everyone

module.exports = listeners
