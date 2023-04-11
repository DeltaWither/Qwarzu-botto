const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")
const id = require("../helper/id.js");

const exec = async (message, args) => {
    let members = message.guild.members.cache
    if (args.length > 0) {
        for (let role of args) {
            role = await id.parseRole(role, message.guild);
            if (!role) {
                return {
                    string: "Every argument has to be a role mention or role id",
                    useful: null
                }
            }
            members = members.intersect(role.members);
        }
    }
    const randomMember = members.random();
    
    return {
        string: `<@${randomMember.user.id}>`,
        useful: randomMember
    };
}

const description = `Usage: ?someone
    ?someone [roles]

Pings a random person in the server, just like @someone did that one april fools before discord removed it. Become ungovernable.

Without arguments it chooses anyone in the server, with arguments it chooses members in specific roles.`;

const someone = new Command("someone", description, exec)
someone.executeGroup = groups.notNewMembers

module.exports = someone
