const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")
const id = require("../helper/id.js")

const exec = async (message, args) => {
    if (!args[0] || !args[1]) {
	return {
	    string: "Please input group name and member id/mention."
	};
    }

    const groupName = args[0]
    const group = groups[groupName]
    const member = await id.parseMember(args[1], message.guild);

    if(!member) {
	return {
	    string: "Please input group name and member id/mention."
	};
    }

    const isMemberOfGroup = await group.checkMember(member)

    return {
	string: isMemberOfGroup.toString()
    };
}

const description = `Usage: ?groupcheck [member group name] [user id or mention]

Returns whether the member is in the group or not.`;

const groupCheck = new Command("groupcheck", description, exec)
groupCheck.executeGroup = groups.staffAndDevs
groupCheck.parent = "help";

module.exports = groupCheck
