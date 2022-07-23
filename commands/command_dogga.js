const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    let number = (Math.random() * 50)
    
    if(number <= 49) {
        return {
	    string:"https://cdn.discordapp.com/attachments/354830452508459031/776312792402755614/Untitled276_20201112050941.png"
	};
    } else {
        return {
	    string: "https://cdn.discordapp.com/attachments/709253499430371328/776370488271175690/Untitled276_20201112085806.png"
	};
    }
}

const description = ""

const dogga = new Command("dogga", description, exec)
dogga.executeGroup = groups.everyone

module.exports = dogga
