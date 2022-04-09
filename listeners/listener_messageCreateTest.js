const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");

const exec = (message) => {
    if(message.author.id === clientId) return
    message.channel.send("a message was sent")
}

const description = ""

const messageCreateTest = new Listener("messagecreatetest", description, exec, "messageCreate")

module.exports = messageCreateTest
