const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")

const exec = (message, args) => {
    const listenerName = args[0]
    
    if (!message.member.roles.cache.hasAny('708716555785076798', '708722040286478356', '945585653024964721', '948632972427423784')) {
        return
    }
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        message.channel.send(`Listener ${listenerName} doesn't exist`)
        return
    }
    
    individualListeners[listenerName].enabled = false
}

const description = ""

const disable = new Command("disable", description, exec)

module.exports = disable
