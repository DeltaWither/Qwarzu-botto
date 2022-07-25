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
    
    individualListeners[listenerName].enabled = false
    return {
	string: `Listener ${listenerName} has been disabled`
    };
}

const description = `Usage: ?disable [listener name]

Disables a running listener.`;

const disable = new Command("disable", description, exec)
disable.executeGroup = groups.admins

module.exports = disable
