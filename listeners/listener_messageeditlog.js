const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");
const id = require("../helper/id.js");

const exec = async (oldMessage, newMessage) => {
    const editedMessagesChannel = await id.parseChannel("1126945206172909670");
    
    console.log(newMessage.editedTimestamp - newMessage.createdTimestamp);
    
    await editedMessagesChannel.send("old: " + oldMessage.content.slice(500) + "\nnew: " + newMessage.content.slice(500) + "\nSent by <@" + newMessage.author.id + ">"
    );
}

const description = `Listener type: messageUpdate

Checks edited messages`;

const messageEditLog = new Listener("messageeditlog", description, exec, "messageUpdate");

module.exports = messageEditLog;
