const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    let number = (Math.random() * 700)
    
    const returnObj = {
	string: ""
    };
    
    if(number > 699) {
        returnObj.string = "yes";
    } else if(number > 698) {
        returnObj.string = "idk, can you?";
    } else if(number > 697) {
        returnObj.string = "stfu i said no";
    } else {
        returnObj.string = "no";
    }

    return returnObj;
}

const description = ""

const canibemod = new Command("canibemod", description, exec)
canibemod.executeGroup = groups.everyone

module.exports = canibemod
