const {Command} = require("./Command.js")

const exec = (message, args) => {
    const dogArray = [
        "https://media.discordapp.net/attachments/801762830478344203/957290702063165550/samoyed_puppy_dog_pictures.png",
        "https://media.discordapp.net/attachments/801762830478344203/957290728994770964/322868_1100-800x825.png",
        "https://media.discordapp.net/attachments/801762830478344203/957291521999261726/3180-Pug_green_grass-732x549-thumbnail-732x549.png",
        "https://media.discordapp.net/attachments/801762830478344203/957291566626643978/image.png"
    ]
        

let index = Math.floor(Math.random() * dogArray.length)
message.channel.send(dogArray[index]);
}

const description = ""

const dog = new Command("dog", description, exec)

module.exports = dog
