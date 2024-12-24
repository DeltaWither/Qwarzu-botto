const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const id = require("../helper/id.js");
const database = require("../helper/database.js");
const sendmines = require("./command_sendmines.js");

const exec = async (message, args) => {
	let result = null;

	const requiredChannel = "708715309107904526";
	const channelId = message.channel.id
	if (channelId != requiredChannel) {
		return {
			string: `You can only gift in <#${requiredChannel}>`
		};
	}

	const amount = parseInt(args[1]);
	if (!amount || amount > 20 || amount < 1) {
		return {
			string: "The amount can't be greater than 20"
		};
	}

	if (Math.random() < 0.8) {
		result = await sendmines.wrappedExec(message, [message.author.id, args[1]], {skipExecGroup: true});
		if (result.string === "Use ?sendmines [user] [amount]" || result.string === "error") {
			return {
				string: "Use ?gift [user] [amount]"
			};
		}
		return {
			string: `The gift backfired, you get ${amount} mines`
		};
	}

	result = await sendmines.wrappedExec(message, args, {skipExecGroup: true});
	if (result.string === "Use ?sendmines [user] [amount]" || result.string === "error") {
		return {
			string: "Use ?gift [user] [amount]"
		};
	}

	return result;
}

const description = `Usage: ?gift [user] [amount]

Sends a user to the mines with up to 20 mines, but with a high chance to backfire.`;

const gift = new Command("gift", description, exec)
gift.executeGroup = groups.notNewMembers;
gift.parent = "mines";

module.exports = gift;
