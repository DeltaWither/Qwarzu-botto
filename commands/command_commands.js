const {Command} = require("./Command.js")
const commandsList = require("./commands.js")

const exec = (message, args) => {
    commandsString = ""
    for (command in commandList) {
        commandsString = commandsString + command + ", ";
    }
    message.channel.send(commandsString.slice(0, -2));
}
const description = "List all commands"

const commands = new Command("commands", description, exec)

module.exports = commands
