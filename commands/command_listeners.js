const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")

const exec = (message, args) => {
    listenersString = ""
    for (listener in individualListeners) {
        let status
        if(individualListeners[listener].enabled) {
            status = "enabled"
        } else {
            status = "disabled"
        }
        
        listenersString = listenersString + listener + "    status: " + status + "\n";
    }
    
    message.channel.send(listenersString)
}
const description = "List all listeners"

const listeners = new Command("listeners", description, exec)

module.exports = listeners
