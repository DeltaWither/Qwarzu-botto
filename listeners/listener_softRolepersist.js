const { Listener } = require("./Listener.js")
const { clientId } = require("../config.json");
const database = require("../helper/database.js")
const id = require("../helper/id.js")

const exec = async (newMember) => {
    const rolepersists = database.read("memberRoles");
    if(!rolepersists[newMember.id]) {
        return;
    }

    for (roleId of rolepersists[newMember.id]) {
        try {
            await newMember.roles.add(roleId);
        }
        catch (err) {}
    }
}

const description = `Listener type: guildMemberAdd

Checks the member's logged roles before they left and gives them the roles.`;

const softRolepersist = new Listener("softrolepersist", description, exec, "guildMemberAdd");
softRolepersist.parent = "rolepersist";

module.exports = softRolepersist;
