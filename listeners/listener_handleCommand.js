const {Listener} = require("./Listener.js")
const commands = require("../commands/commands.js");

const exec = async (message) => {
    if (message.author.bot) {
	return;
    }

    const {commandName, args} = await parseCommand(message.content, message);
    if (!commandName) {
	return;
    }
    
    if (commands[commandName]) {
        const result = await executeCommand(commandName, message, args);
	await message.channel.send(result);
    }
}

const executeCommand = async (commandName, message, args) => {
    if (!commands[commandName]) {
	return;
    }

    const result = await commands[commandName].wrappedExec(message, args);

    if (!result) {
	return commandName + " - No output";
    }
    if (!result.string) {
	return commandName + " - No string";
    }
    return result.string;
}

const parseCommand = async (commandString, message) => {
    if (commandString[0] !== "?") {
        return {
	    commandName: null,
	    args: null};
    }

    let bracketParsed = commandString;
    if (commandString.includes("{") || commandString.includes("}")) {
	bracketParsed = await parseBrackets(commandString, message);
    }

    let commandAndArgs = bracketParsed.replace(/\s+/g,' ').trim().slice(1).split(" ")
    
    let commandName = commandAndArgs[0].toLowerCase();
    let args = commandAndArgs.slice(1);
   
    return {commandName, args};
}

const parseBrackets = async (commandString, message) => {
    let bracketCounter = 0;
    const startEndPos = {
	start: null,
	end: null
    }
    let previousEnd = null;
    
    let dividedCommand = [];

    for (i = 0; i < commandString.length; i++) {
	if (commandString[i] === "{") {
	    bracketCounter++;
	    if (bracketCounter === 1) {
		startEndPos.start = i + 1;
	    }
	}
	if (commandString[i] === "}") {
	    bracketCounter--;
	    if (bracketCounter === 0) {
		startEndPos.end = i;
	    }
	}

	if (bracketCounter === 0 && startEndPos.start !== null && startEndPos.end !== null) {
	    //get output
	    const innerCommand = commandString.slice(startEndPos.start, startEndPos.end);
	    const {commandName, args} = await parseCommand(innerCommand, message);
	    const output = await executeCommand(commandName, message, args)

	    //substitute output
	    if (previousEnd) {
		dividedCommand.push(commandString.slice(previousEnd, startEndPos.start - 1));
	    } else {
		dividedCommand.push(commandString.slice(0, startEndPos.start - 1));
	    }
	    dividedCommand.push(output);

	    previousEnd = startEndPos.end + 1;
	    startEndPos.start = null;
	    startEndPos.end = null;
	}
    }

    dividedCommand.push(commandString.slice(previousEnd));

    if (dividedCommand.length === 0) {
	return commandString;
    }
    return dividedCommand.join(" ");
}

const description = `Listener type: messageCreate

Whenever a message is sent it checks if it's a command and executes it.`;

const handleCommand = new Listener("handlecommand", description, exec, "messageCreate")
handleCommand.enabled = true //This one needs to be enabled by default

module.exports = handleCommand
