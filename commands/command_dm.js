module.exports = {
    "description": "send a dm. use : ex. ?dm <@user or id> content",
    "function": dm
}

function dm(message, args) {
    var mentions = msg.mentions.users.first();
    if (message.members.role.cache.has("708716555785076798","708715594840801300","947201308035776633"))
        if (message.mentions.members.size > 0) {
            var dmMessage = msg.content.slice(20).trim();
            mentions.send(dmMessage)
        }
}