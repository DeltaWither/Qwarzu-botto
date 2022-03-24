module.exports = {
    "description": "send a dm. use : ex. ?dm <@user or id> content",
    "function": dm
}



function dm(message, args) {
    var mentions = message.mentions.users.first();
    var dmMessage = message.content.slice(26).trim();
    
    if (message.member.roles.cache.has('708716555785076798')) {
        mentions.send(dmMessage)
    } else {
        message.channel.send("no perms")
    }
     

}
