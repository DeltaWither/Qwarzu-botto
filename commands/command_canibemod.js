const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    let number = (Math.random() * 700)
    
    if(number > 699) {
        message.channel.send("yes");
    } else if(number > 698) {
        message.channel.send("idk, can you?");
    } else if(number > 697) {
        message.channel.send("stfu i said no");
    } else {
        message.channel.send("no");
    }
}

const description = ""

const canibemod = new Command("canibemod", description, exec)
canibemod.executeGroup = groups.everyone

module.exports = canibemod
