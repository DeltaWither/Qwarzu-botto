const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    const members = await message.guild.members.fetch()
    const randomMember = members.random()
    
    return {
	string: `<@${randomMember.user.id}>`
    };
}

const description = `Usage: ?someone

Pings a random person in the server, just like @someone did that one april fools before discord removed it. Become ungovernable.`;

const someone = new Command("someone", description, exec)
someone.executeGroup = groups.notNewMembers

module.exports = someone
