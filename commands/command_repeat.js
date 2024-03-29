const { Command } = require("./Command.js")
const { commandList } = require("./commands.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    const returnObj = {
	string: "",
	useful: []
    };

    const amount = parseInt(args[0]);
    if (amount > 20) {
	return {
	    string: "Please don't repeat over 20 times"
	};
    }
    const repeatedCommand = commandList[args[1]];
    const repeatedCommandArgs = args.slice(2);


    for (let i = 0; i < amount; i++) {
	const temp = await repeatedCommand.wrappedExec(message, repeatedCommandArgs);
	returnObj.string += temp.string;
	returnObj.string += "\n";

	if (temp.useful) {
	    returnObj.useful.push(temp.useful);
	}
    }

    return returnObj;
}
const description = `Usage: ?repeat [amount <= 20] [any other command usage]

Repeats a command up to 20 times and shows all the output in one message.`;

const repeat = new Command("repeat", description, exec)
repeat.executeGroup = groups.staff;
repeat.defaultOptions = {
    skipEvalBrackets: true
};

module.exports = repeat
