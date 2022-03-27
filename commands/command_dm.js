module.exports = {
    "description": "send a dm. use : ex. ?dm <@user or id> content",
    "function": dm
}



function dm(message, args) {
    var mentions = message.mentions.users.first();
    var dmMessage = message.content.slice(26).trim();
    
    if (message.mentions.members.size > 0) {
        if (message.member.roles.cache.hasAny('708716555785076798', '708722040286478356', '945585653024964721')) {
            mentions.send(dmMessage)
        } else {
            message.channel.send("no perms")
        }
    } else {
        message.channel.send("no mention")
    }
}
