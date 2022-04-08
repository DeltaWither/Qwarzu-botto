const id = require("../helper/id.js")

module.exports = {
    "description": "send a dm. use : ex. ?dm <@user or id> content",
    "function": dm
}



async function dm(message, args) {
    let userId
    
    if( await id.isMemberId(args[0], message.guild) ) {
        userId = args[0]
    } else if( await id.isMemberMention(args[0], message.guild) ) {
        userId = args[0].slice(3, -1)
    } else {
        message.channel.send("no mention")
        return
    }
    
    let dmMessage = args.slice(1).join(" ")
    let user = await message.guild.members.fetch(userId)
    console.log(user)
    
    if (message.member.roles.cache.hasAny('708716555785076798', '708722040286478356', '945585653024964721')) {
        user.send(dmMessage)
    } else {
        message.channel.send("no perms")
    }
}
