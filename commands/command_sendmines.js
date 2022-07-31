const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const id = require("../helper/id.js");
const database = require("../helper/database.js");
const rolepersist = require("./command_rolepersist.js");

const exec = async (message, args) => {
    const member = await id.parseMember(args[0], message.guild);
    const amount = parseInt(args[1]);
    if (!member || !amount) {
	return {
	    string: "Use ?sendmines [user] [amount]"
	}
    }
    
    await rolepersist.wrappedExec(message, [member.id, "708719891972358194"]);

    if (!database.read("minescount")) {
	database.create("minescount", {});
    }

    const minesCount = database.read("minescount");
    minesCount[member.id] = amount;
    database.update("minescount", minesCount);

    return {
	string: `${member.user.username} is now in the mines until he mines ${amount} times lmao`
    }
}

const description = `Usage: ?sendmines [user] [amount]

Sends a user to the mines with a specified amount of times to mine to leave.`;

const sendmines = new Command("sendmines", description, exec)
sendmines.executeGroup = groups.staff;
sendmines.parent = "mines";

module.exports = sendmines;
