const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const listenerName = args[0]
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        return {
	    string:`Listener ${listenerName} doesn't exist`
	};
    }
    
    individualListeners[listenerName].enabled = true
    return {
	string: `Listener ${listenerName} has been enabled`
    };
}

const description = ""

const enable = new Command("enable", description, exec)
enable.executeGroup = groups.admins

module.exports = enable
