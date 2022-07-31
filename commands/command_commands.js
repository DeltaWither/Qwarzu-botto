const {Command} = require("./Command.js")
const commandsList = require("./commands.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    let commandsString = "";

    for (command in commandList) {
        commandsString = commandsString + command + ", ";
    }

    return {
	string: commandsString.slice(0, -2)
    };
}

const description = `Usage: ?commands

Lists all commands`;

const commands = new Command("commands", description, exec)
commands.executeGroup = groups.everyone
commands.parent = "help";

module.exports = commands
