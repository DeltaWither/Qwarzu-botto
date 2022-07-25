const {Command} = require("./Command.js")
const id = require("../helper/id.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    let userId
    
    if (!args[0]) {
        return {
	    string: "No mention"
	};
    }
    
    if( await id.isMemberId(args[0], message.guild) ) {
        userId = args[0]
    } else if( await id.isMemberMention(args[0], message.guild) ) {
        userId = args[0].slice(2, -1)
        if(userId[0] === "!") {
            userId = userId.slice(1)
        }
    } else {
        return {
	    string: "No mention"
	};
    }
    
    let dmMessage = args.slice(1).join(" ")
    let member = await message.guild.members.fetch(userId)
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
