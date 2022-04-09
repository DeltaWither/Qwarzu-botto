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
        try{
            await commands[commandName].exec(message, args);
        }
        catch(err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
            console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
        }
    }
}

const description = ""

const handleCommand = new Listener("handleCommand", description, exec, "messageCreate")
handleCommand.enabled = true //This one needs to be enabled by default

module.exports = handleCommand
