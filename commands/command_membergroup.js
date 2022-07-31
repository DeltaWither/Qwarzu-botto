const { Command } = require("./Command.js");
const groups = require("../groups/membergroups.js");
const database = require("../helper/database.js");
const id = require("../helper/id.js")

const permissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS_AND_STICKERS",
    "USE_APPLICATION_COMMANDS",
    "REQUEST_TO_SPEAK",
    "MANAGE_EVENTS",
    "MANAGE_THREADS",
    "CREATE_PUBLIC_THREADS",
    "CREATE_PRIVATE_THREADS",
    "USE_EXTERNAL_STICKERS",
    "SEND_MESSAGES_IN_THREADS",
    "START_EMBEDDED_ACTIVITIES",
    "MODERATE_MEMBERS"
];

const possibleFields = ["everyone", "disallowedPerms", "allowedPerms", "disallowedRoles", "allowedRoles",
			"disallowedMembers", "allowedMembers"];

const exec = async (message, args) => {
    if (args[0] === "describe") {
	return describe(args.slice(1));
    }

    if (args[0] === "edit") {
	if (!groups.admins.checkMember(message.member)) {
	    return {
		string: "Only admins can edit member groups"
	    };
	}
	return edit(args.slice(1));
    }

    return {
	string: "Use ?membergroup describe or ?membergroup edit"
    };
}

const describe = (args) => {
    if (!args[0]) {
	return {
	    string: "Name a member group to describe"
	};
    }
 
    const group = groups[args[0]];
    if (!group) {
	return {
	    string: `Group ${args[0]} doesn't exist`
	};
    }

    let returnObj = {
	string: ""
    };

    //show all necessary fields
    if (group.everyone) {
	returnObj.string += "everyone: true\n\n"
    }

    for (field of possibleFields.slice(1)) {
	if (group[field].length !== 0) {
	    returnObj.string += field + ":\n";
	    returnObj.string += group[field].toString() + "\n\n";
	}
    }

    return returnObj;
}

const edit = (args) => {
    if (!args[0]) {
	return {
	    string: "Name a member group to edit"
	};
    }
 
    const groupName = args[0];
    const group = groups[groupName];
    const field = args[1];
    
    if (!group) {
	return {
	    string: `Group ${args[0]} doesn't exist`
	};
    }

    if (!possibleFields.includes(field)) {
	return {
	    string: `The field ${field} doesn't exist`
	};
    }

    //edit everyone
    if (field === "everyone") {
	return editEveryone(group, args[2]);
    }

    //edit perms
    if (field === "allowedPerms" || field === "disallowedPerms") {
	return editPerms(group, field, args[2]);
    }

    //edit anything with ids
    if (field === "allowedRoles" ||
	field === "disallowedRoles" ||
	field === "allowedMembers" ||
	field === "disallowedMembers") {
	return editIdFields(group, field, args[2]);
    }
    
    return {string:"nothing happened"};
}

const editEveryone = (group, boolString) => {
    group.everyone = (boolString === "true" ? true : false);
    editDatabase(group, "everyone");
    
    return {
	string: `everyone field in group ${group.name} is now ${group.everyone}`
    };
}

const editPerms = (group, field, permChange) => {
    const permName = permChange.slice(1).toUpperCase();

    if (permissions.includes(permName)) {
        addRemoveField(group, field, permChange.toUpperCase());
	editDatabase(group, field);
    }
    
    return {
	string: `${field} field in group ${group.name} is now ${group[field].toString()}`
    };
}

const editIdFields = (group, field, idChange) => {
    const readId = idChange.slice(1);

    if (id.isId(readId)) {
	addRemoveField(group, field, idChange);
	editDatabase(group, field);
    }

    return {
	string: `${field} field in group ${group.name} is now ${group[field].toString()}`
    }
}

const addRemoveField = (group, field, change) => {
    const sign = change[0];
    const changeElement = change.slice(1);

    if (sign === "+") {
	if (!group[field].includes(changeElement)) {
	    group[field].push(changeElement);
	}
    }

    if (sign === "-") {
	group[field] = group[field].filter((value) => {
	    return value !== changeElement;
	});
    }
}

const editDatabase = (group, field) => {
    const groupsData = database.read("memberGroups");
    groupsData[group.name][field] = group[field];
    database.update("memberGroups", groupsData);
}

const description = `Usage: ?membergroup describe [group name]
       ?membergroup edit [group name] [field] [change]

"describe" describes all properties of a member group

"edit" allows you to change the properties of a member group.

In edit, "field" is one of everyone, disallowedPerms, allowedPerms, disallowedRoles, allowedRoles, disallowedMembers and allowedMembers.

If the field is everyone, the change is true or false
If the field is perms, the change is +[perm name] to add one or -[perm name] to remove one. All permissions in the discordjs docs
If the field is roles or members, the change is +[id] to add one or -[id] to remove one`;

const membergroup = new Command("membergroup", description, exec);
membergroup.executeGroup = groups.everyone;
membergroup.parent = "help";

module.exports = membergroup;
