const { Command } = require("./Command.js")
const { modules } = require("../modules/modules.js")

const orangeArray = [
    "https://cdn.discordapp.com/attachments/777303536659857429/1004605590275887114/710733332631257109.png",
    "https://cdn.discordapp.com/attachments/777303536659857429/1004605590582075472/ZomboMeme_12102021213257.jpg",
    "https://cdn.discordapp.com/attachments/777303536659857429/1004605643098947614/unknown-5.png",
    "https://tenor.com/view/south-park-funny-we-dont-take-your-type-gif-14806320"
];

const exec = (message, args) => {
    let index = Math.floor(Math.random() * orangeArray.length)
    return {
	string: orangeArray[index]
    };
}

const description = `Usage: ?orange

Bullies oranges`;

const orange = new Command("orange", description, exec)
orange.parent = "randomized";

module.exports = orange;
