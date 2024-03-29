const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const mioArray = [
    "https://cdn.discordapp.com/attachments/716896207695249469/776980998695944223/Mio_Honda_Grill.jpg",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981012705181736/Mio_Honda_Think.jpg",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981014085369856/Mio_Honda_Figure.jpg",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981018325811260/Mio_Honda_Step.jpg",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981025120845824/Mio_Honda_Happy.jpg",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981028517969920/Mio_Honda_Disturbed_1.png",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981057782022174/Mio_Honda_Borgar.png",
    "https://cdn.discordapp.com/attachments/716896207695249469/776981189029265408/Mio_Honda_Step.gif"
];

const exec = (message, args) => {
   
    let index = Math.floor(Math.random() * mioArray.length)
    
    return {
	string: mioArray[index]
    };
}

const description = `Usage: ?mio

Posts a random image of ookami mio.`;

const mio = new Command("mio", description, exec)
mio.executeGroup = groups.everyone
mio.parent = "randomized";

module.exports = mio
