const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const fledrakArray = [
        "https://cdn.discordapp.com/attachments/713960572982657077/777306596724047912/monke1.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306597733957712/monke2.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306599441694740/monke3.png",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306599680639036/monke4.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306602331308082/monke5.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306609784848464/monke6.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306612758609960/monke7.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306614750380054/monke8.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306622149263410/monke9.jpg",
        "https://cdn.discordapp.com/attachments/713960572982657077/777306624334495804/monke10.jpg",
        "https://cdn.discordapp.com/attachments/777303536659857429/809547476280672300/Untitled37_20210209223446-1.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/809844769361756160/monkey_onsen.jpg",
        "https://media.discordapp.net/attachments/708715309107904526/842104881510219776/monke.jpg"
    ]
    
    let index = Math.floor(Math.random() * fledrakArray.length)
    
    return {
	string: fledrakArray[index]
    };
}

const description = ""

const fledrak = new Command("fledrak", description, exec)
fledrak.executeGroup = groups.everyone

module.exports = fledrak
