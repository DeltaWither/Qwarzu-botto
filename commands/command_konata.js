const {Command} = require("./Command.js")

const exec = (message, args) => {
    const konataArray = [
        "https://images.discordapp.net/avatars/366632492590956544/e33fb154663f5a63138d934224b47c7d.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/504/434/717.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/893/941/e6a.gif",
        "https://i.pinimg.com/originals/1d/e3/2e/1de32e5c822d9259be7ac7a35b71d9c8.gif",
        "https://pbs.twimg.com/profile_images/737240219/thinking_400x400.png",
        "https://i.pinimg.com/originals/8a/10/f5/8a10f5f9272fcd57073171cdffef1b2e.gif"
    ]
    
    let index = Math.floor(Math.random() * konataArray.length)
    
    message.channel.send(konataArray[index]);
}

const description = ""

const konata = new Command("konata", description, exec)

module.exports = konata
