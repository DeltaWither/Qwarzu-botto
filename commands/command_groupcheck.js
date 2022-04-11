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
        return
    }
    
    const member = await message.guild.members.fetch(userId)
    const isMemberOfGroup = await group.checkMember(member)
    
    console.log(await member.permissions.has("ADMINISTRATOR"))
    
    await message.channel.send(isMemberOfGroup.toString())
}

const description = ""

const groupCheck = new Command("groupcheck", description, exec)

module.exports = groupCheck
