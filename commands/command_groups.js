const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    groupsString = ""
    for (group in groups) {
        groupsString = groupsString + group + "\n";
    }
    
    return {
	string: groupsString
    };
}

const description = ""

const groupsCommand = new Command("groups", description, exec)
groupsCommand.executeGroup = groups.everyone

module.exports = groupsCommand
