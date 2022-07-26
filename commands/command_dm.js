const {Command} = require("./Command.js")
const id = require("../helper/id.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    if (!args[0]) {
        return {
	    string: "No mention"
	};
    }
    
    const member = await id.parseMember(args[0], message.guild);
    if (!member) {
        return {
	    string: "No mention"
	};
    }
    
    let dmMessage = args.slice(1).join(" ")
    await member.send(dmMessage)
    return {
	string: `Message sent to ${member.user.username}`
    };
}

const description = `Usage: ?dm [user id or mention] [message]

Sends a dm to someone with a message.`;

const dm = new Command("dm", description, exec)
dm.executeGroup = groups.staff

module.exports = dm
