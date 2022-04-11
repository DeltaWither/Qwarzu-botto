const {Listener} = require("./Listener.js")
const commands = require("../commands/commands.js");

const exec = async (message) => {
    let command = message.content;
    if(command[0] !== "?") {
        return;
    }
    
    let commandAndArgs = command.slice(1).toLowerCase().split(" ")
    
    let commandName = commandAndArgs[0];
    let args = commandAndArgs.slice(1);
    
    if(commands[commandName]) {
        await commands[commandName].fullyWrappedExec(message, args);
    }
}

const description = ""

const handleCommand = new Listener("handlecommand", description, exec, "messageCreate")
handleCommand.enabled = true //This one needs to be enabled by default

module.exports = handleCommand
