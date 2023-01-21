const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")
const database = require("../helper/database.js");

const exec = (message, args) => {
    const members = message.guild.members.cache;
    const memberRoles = {};
    
    for (member of members) {
        memberRoles[member[0]] = member[1]._roles;
    }
    
    database.create("memberRoles", memberRoles);
//     console.log(members)
    return {
        string: "Updated every role"
    };
}

const description = `Usage: ?updateRoles

Updates every member's roles in the database`;

const updateRoles = new Command("updateroles", description, exec)
updateRoles.executeGroup = groups.everyone
updateRoles.parent = "logging";

module.exports = updateRoles
