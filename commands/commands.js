const {Command} = require("./Command.js")
const fs = require("fs")

const commandsExec = (message, args) => {
    commandsString = ""
    for (command in commandList) {
        commandsString = commandsString + command + ", ";
    }
    message.channel.send(commandsString.slice(0, -2));
}
const commandsDescription = "List all commands"
const commands = new Command("commands", commandsDescription, commandsExec)

commandList = {
    "commands": commands
}

// Not sure why it has to go to ./commands when . is already the commands folder
const files = fs.readdirSync("./commands");

files.forEach(
    filename => {
        if(filename.startsWith("command_")) {
            const command = require("./" + filename)
            commandList[command.name] = command
        }
    }
)

module.exports = commandList;
