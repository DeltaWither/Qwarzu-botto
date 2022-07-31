const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const database = require("../helper/database.js");
const rolepersist = require("./command_rolepersist.js");

const exec = async (message, args) => {
    if (message.channel.id !== "708719827489128489") {
	return;
    }

    const mineCount = database.read("minescount");
    if (!mineCount[message.author.id] || mineCount[message.author.id] === 1) {
	delete mineCount[message.author.id];
	await rolepersist.wrappedExec(message, [message.author.id, "708719891972358194"], {skipExecGroup: true});
    } else {
	mineCount[message.author.id] -= 1;
    }

    database.update("minescount", mineCount);

    return {
	string: `<@${message.author.id}> only ${mineCount[message.author.id]} "?mine"s left> `
    }
}

const description = `Usage: ?mine

If you are in the mines it gets you closer to leaving`;

const mine = new Command("mine", description, exec)
mine.executeGroup = groups.everyone;
mine.parent = "mines";

module.exports = mine;
