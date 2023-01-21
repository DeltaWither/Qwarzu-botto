const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");
const database = require("../helper/database.js")

const exec = (oldMember, newMember) => {    
    const oldRoles = oldMember._roles;
    const newRoles = newMember._roles;
    if (oldRoles.length = newRoles.length &&
        oldRoles.every((val, index) => val === newRoles[index])
    ) {
        return;
    }
    
    const object = database.read("memberRoles")
    object[oldMember.user.id] = newRoles;
    database.update("memberRoles", object);
}

const description = `Listener type: guildMemberUpdate

Checks every time a member's roles are updated and saves it to the database`;

const logRoleChange = new Listener("logrolechange", description, exec, "guildMemberUpdate");
logRoleChange.parent = "logging";

module.exports = logRoleChange;
