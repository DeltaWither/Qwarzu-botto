const { Listener } = require("./Listener.js")
const { clientId } = require("../config.json");
const database = require("../helper/database.js")
const id = require("../helper/id.js")

const exec = async (newMember) => {
    console.log("hi");
    const rolepersists = database.read("rolepersist");
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

Checks the member's rolepersists and gives them the roles.`;

const rolepersist = new Listener("rolepersist", description, exec, "guildMemberAdd");
rolepersist.parent = "rolepersist";

module.exports = rolepersist;
