const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const dogArray = [
    "https://media.discordapp.net/attachments/801762830478344203/957290702063165550/samoyed_puppy_dog_pictures.png",
    "https://media.discordapp.net/attachments/801762830478344203/957290728994770964/322868_1100-800x825.png",
    "https://media.discordapp.net/attachments/801762830478344203/957291521999261726/3180-Pug_green_grass-732x549-thumbnail-732x549.png",
    "https://media.discordapp.net/attachments/801762830478344203/957291566626643978/image.png"
];
 
const exec = (message, args) => {
    let index = Math.floor(Math.random() * dogArray.length)
    return {
	string:dogArray[index]
    };
}

const description = `Usage: ?dog

Shows a randomized image of a dog.`;

const dog = new Command("dog", description, exec)
dog.executeGroup = groups.everyone
dog.parent = "randomized";

module.exports = dog
