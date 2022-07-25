const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    return {
	string: 'Pong!'
    };
}

const description = `Usage: ?ping

Returns a message just to show the bot works.`;

const ping = new Command("ping", description, exec)
ping.executeGroup = groups.everyone

module.exports = ping
