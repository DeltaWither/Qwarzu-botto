const { Command } = require("./Command.js");
const id = require("../helper/id.js");
const database = require("../helper/database.js");

const exec = async (message, args) => {
    if (!args[0] || !args[1]) {
	return {
	    string: "Use ?rolepersist [user] [role]"
	}
    }
    const member = await id.parseMember(args[0], message.guild);
    const role = await id.parseRole(args[1], message.guild);
    let returnString = "";

    if (!database.read("rolepersist")) {
	database.create("rolepersist", {})
    }

    const rolepersists = database.read("rolepersist");
    if (!rolepersists[member.id]) {
	await member.roles.add(role);
	rolepersists[member.id] = [role.id];
	returnString = `Rolpersisted role ${role.name} to ${member.user.username}`;
    } else if (!rolepersists[member.id].includes(role.id)) {
	await member.roles.add(role);
	rolepersists[member.id].push(role.id);
	returnString = `Rolpersisted role ${role.name} to ${member.user.username}`;
    } else {
	await member.roles.remove(role);
	rolepersists[member.id] = rolepersists[member.id].filter(roleId => roleId !== role.id);
	returnString = `Removed rolpersisted role ${role.name} from ${member.user.username}`;
    }

    if (rolepersists[member.id].length === 0) {
	delete rolepersists[member.id];
    }

    database.update("rolepersist", rolepersists);
    
    return {
	string: returnString
    };
}

const description = `Usage: ?rolepersist [user] [role]

If the user doesn't have the role, gives it to them and it will stay even if they rejoin.
If the user has the role it removes it and the rolepersist.`;

const rolepersist = new Command("rolepersist", description, exec)
rolepersist.parent = "rolepersist";

module.exports = rolepersist;
