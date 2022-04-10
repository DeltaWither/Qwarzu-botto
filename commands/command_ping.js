const {Command} = require("./Command.js")

const exec = async (message, args) => {
    message.reply('Pong!');
}

const description = "The ping command"

const ping = new Command("ping", description, exec)

module.exports = ping
