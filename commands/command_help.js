const { Command } = require("./Command.js");
const groups = require("../groups/membergroups.js");
const commandsList = require("./commands.js");
const { individualListeners } = require("../listeners/listeners.js");
const { schedules } = require("../schedules/schedules.js");

const exec = async (message, args) => {
    let returnString;
    if (!args[0]) {
	returnString = `Qwarzu Botto is a highly customizable open source discord bot written in discord.js.
Github: https://github.com/DeltaWither/Qwarzu-botto

For more help try:
?help command
?help listener
?help schedule
?help mgroup`;
    }

    switch (args[0]) {
    case "command":
	returnString = command(args.slice(1));
	break;
    case "listener":
	returnString = listener(args.slice(1));
	break;
    case "schedule":
	returnString = schedule(args.slice(1));
	break;
    case "mgroup":
	returnString = mgroup(args.slice(1));
	break;
    }

    return {
	string: returnString
    };
}

const command = (args) => {
    if (!args[0]) {
	return `Commands are messages starting with "?" that do something and show the output in a message.
Use
\`?help command [name of command]\`
for info on specific commands.`;
    }

    const currentCommand = commandsList[args[0]];

    if (currentCommand) {
	return currentCommand.description;
    }
}

const listener = (args) => {
    if (!args[0]) {
	return `Listeners do something on certain events, like a message being sent or someone joining the server.
Use
\`?help listener [name of listener]\`
for info on specific listeners.`;
    }

    const currentListener = individualListeners[args[0]];

    if (currentListener) {
	return currentListener.description;
    }
}

const schedule = (args) => {
    if (!args[0]) {
	return `Schedules do something at certain times, like every hour, or starting 3 minute from now, every 10 seconds from then, a total of 7 times.
Use
\`?help listener [name of listener]\`
for info on specific listeners.`;
    }

    const currentSchedule = schedules[args[0]];

    if (currentSchedule) {
	return currentSchedule.description;
    }
}

const mgroup = (args) => {
    if (!args[0]) {
	return `Member groups are groups of people depending on their permissions, roles, id, or potentially any info related to the user.
Use
\`?help mgroup [name of member group]\`
for info on specific member groups.`;
    }

    const currentMGroup = groups[args[0]];

    if (currentMGroup) {
	return currentMGroup.description;
    }
}

const description = `Usage: ?help
       ?help [feature name]
       ?help [feature name] [command/listener/... name]

Posts useful information about the bot and its features.`;

const help = new Command("help", description, exec);
help.executeGroup = groups.everyone;
help.parent = "help";

module.exports = help;
