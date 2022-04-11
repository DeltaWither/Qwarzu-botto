const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    message.reply('Pong!');
}

const description = "The ping command"

const ping = new Command("ping", description, exec)
ping.executeGroup = groups.everyone

module.exports = ping
