const {Listener} = require("./Listener.js")
const commands = require("../commands/commands.js");

const exec = async (message) => {
    let command = message.content;
    if (command[0] !== "?") {
        return;
    }

    if (message.author.bot) {
	return;
    }
    
    let commandAndArgs = command.slice(1).split(" ")
    
    let commandName = commandAndArgs[0].toLowerCase();
    let args = commandAndArgs.slice(1);
    
    if (commands[commandName]) {
        const result = await commands[commandName].wrappedExec(message, args);

	if (!result) {
	    await message.channel.send(commandName + " - No output");
	    return;
	}
	if (!result.string) {
	    await message.channel.send(commandName + " - No string");
	}
	await message.channel.send(result.string);
    }
}

const description = ""

const handleCommand = new Listener("handlecommand", description, exec, "messageCreate")
handleCommand.enabled = true //This one needs to be enabled by default

module.exports = handleCommand
