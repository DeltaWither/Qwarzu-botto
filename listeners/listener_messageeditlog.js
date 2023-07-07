const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");
const id = require("../helper/id.js");

const exec = async (oldMessage, newMessage) => {
    const editedMessagesChannel = await id.parseChannel("1126945206172909670", newMessage.guild);
    
    if (newMessage.editedTimestamp - newMessage.createdTimestamp < 1000) {
        return;
    }
    
    // if an embed is edited it gets redisplayed again so another check here
    if (oldMessage.editedTimestamp && newMessage.editedTimestamp - oldMessage.editedTimestamp < 100) {
        return
    }
    
    let messageStr = "old: ";
    if (oldMessage.content) {
        messageStr += oldMessage.content.slice(0, 500);
    }
        
    messageStr += "\nnew: " + newMessage.content.slice(0, 500) + "\nSent by <@" + newMessage.author.id + ">";
    
    await editedMessagesChannel.send({content: messageStr, allowedMentions: {parse: [] }});
}

const description = `Listener type: messageUpdate

Checks edited messages`;

const messageEditLog = new Listener("messageeditlog", description, exec, "messageUpdate");

module.exports = messageEditLog;
