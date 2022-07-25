const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");

const exec = (message) => {
    if(message.author.id === clientId) return
    message.channel.send("a message was sent")
}

const description = `Listener type: messageCreate

Don't enable this one. It just sends a message for every message that is sent.`;

const messageCreateTest = new Listener("messagecreatetest", description, exec, "messageCreate")

module.exports = messageCreateTest
