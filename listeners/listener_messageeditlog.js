const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");
const id = require("../helper/id.js");

const exec = async (oldMessage, newMessage) => {
    const editedMessagesChannel = await id.parseChannel("1126945206172909670", newMessage.guild);
    
    console.log(newMessage.editedTimestamp - newMessage.createdTimestamp);
    
    let messageStr = "old: ";
    if (oldMessage.content) {
        messageStr += oldMessage.content.slice(0, 500);
    }
        
    messageStr += "\nnew: " + newMessage.content.slice(0, 500) + "\nSent by <@" + newMessage.author.id + ">"
    );
    
    await editedMessagesChannel.send(messageStr)
}

const description = `Listener type: messageUpdate

Checks edited messages`;

const messageEditLog = new Listener("messageeditlog", description, exec, "messageUpdate");

module.exports = messageEditLog;
