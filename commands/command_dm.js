const {Command} = require("./Command.js")
const id = require("../helper/id.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    let userId
    
    if( await id.isMemberId(args[0], message.guild) ) {
        userId = args[0]
    } else if( await id.isMemberMention(args[0], message.guild) ) {
        userId = args[0].slice(2, -1)
        if(userId[0] === "!") {
            userId = userId.slice(1)
        }
    } else {
        message.channel.send("no mention")
        return
    }
    
    let dmMessage = args.slice(1).join(" ")
    let user = await message.guild.members.fetch(userId)
    
    if (message.member.roles.cache.hasAny('708716555785076798', '708722040286478356', '945585653024964721')) {
        user.send(dmMessage)
    } else {
        message.channel.send("no perms")
    }
}

const description = ""

const dm = new Command("dm", description, exec)
dm.executeGroup = groups.staffAndDevs

module.exports = dm
