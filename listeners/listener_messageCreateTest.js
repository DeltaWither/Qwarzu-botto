const {Listener} = require("./Listener.js")

const exec = (message) => {
    if(message.author.id === "959416544423718982") return
    message.channel.send("a message was sent")
}

const description = ""

const messageCreateTest = new Listener("messagecreatetest", description, exec, "messageCreate")

module.exports = messageCreateTest
