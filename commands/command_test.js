const {Command} = require("./Command.js")

const exec = (message, args) => {
    let number = Math.floor(Math.random() * 100)
    
    message.channel.send(number.toString());
}

const description = ""

const test = new Command("test", description, exec)

module.exports = test
