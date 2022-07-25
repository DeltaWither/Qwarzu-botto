const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const cesArray = [
        "https://cdn.discordapp.com/attachments/753473964277235815/776905396124123136/FB_IMG_1603016308502.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905395855556669/FB_IMG_1603151037360.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905395691061298/FB_IMG_1603016045236.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905395444121670/unknown.png",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905395280674816/FB_IMG_1603670611874.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905394844991569/FB_IMG_1603670445524.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905394676170772/FB_IMG_1603670170530.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905394458329088/FB_IMG_1604169863658.jpg",
        "https://cdn.discordapp.com/attachments/753473964277235815/776905394223710308/FB_IMG_1604590924085.jpg"
    ]
    
    let index = Math.floor(Math.random() * cesArray.length)
    
    return {
	string: cesArray[index]
    };
}

const description = `Usage: ?ces

Returns a randomized image of ces (kaguya?)`;

const ces = new Command("ces", description, exec)
ces.executeGroup = groups.everyone

module.exports = ces
