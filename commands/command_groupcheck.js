const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")
const id = require("../helper/id.js")

const exec = async (message, args) => {
    const groupName = args[0]
    const group = groups[groupName]
    
    let userId
    if( await id.isMemberId(args[1], message.guild) ) {
        userId = args[1]
    } else if( await id.isMemberMention(args[1], message.guild) ) {
        userId = args[1].slice(2, -1)
        if(userId[1] === "!") {
            userId = userId.slice(1)
        }
    } else {
        return {
	    string: "wrong format"
	};
    }
    
    const member = await message.guild.members.fetch(userId)
    const isMemberOfGroup = await group.checkMember(member)
    
    console.log(await member.permissions.has("ADMINISTRATOR"))
    
    return {
	string: isMemberOfGroup.toString()
    };
}

const description = `Usage: ?groupcheck [member group name] [user id or mention]

Returns whether the member is in the group or not.`;

const groupCheck = new Command("groupcheck", description, exec)
groupCheck.executeGroup = groups.staffAndDevs

module.exports = groupCheck
