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
 
    let returnObj = {
	string: ""
    };
    const group = groups[args[0]];

    if (!group) {
	return {
	    string: `Group ${args[0]} doesn't exist`
	};
    }

    //show all necessary fields
    if (group.everyone) {
	returnObj.string += "everyone: true\n\n"
    }

    const otherFields = ["disallowedPerms", "allowedPerms", "disallowedRoles", "allowedRoles",
			 "disallowedMembers", "allowedMembers"];

    for (field of otherFields) {
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
 
    let returnObj = {
	string: ""
    };

    const groupName = args[0];
    const group = groups[groupName];
    
    if (!group) {
	return {
	    string: `Group ${args[0]} doesn't exist`
	};
    }

    const field = args[1];
    const possibleFields = ["everyone", "disallowedPerms", "allowedPerms", "disallowedRoles", "allowedRoles",
			    "disallowedMembers", "allowedMembers"]

    if (!possibleFields.includes(field)) {
	return {
	    string: `The field ${field} doesn't exist`
	};
    }

    //edit everyone
    if (field === "everyone") {
	group.everyone = (args[2] === "true" ? true : false);

	
	const groupsData = database.read("memberGroups");
	groupsData[groupName].everyone = group.everyone;
	database.update("memberGroups", groupsData);
	
	return {
	    string: `everyone field in group ${group.name} is now ${group.everyone}`
	};
    }

    //edit perms
    if (field === "allowedPerms" || field === "disallowedPerms") {
	const permName = args[2].slice(1).toUpperCase();

	if (args[2][0] === "+") {
	    if (permissions.includes(permName) && !group[field].includes(permName)) {
		group[field].push(permName);
	    }
	}

	if (args[2][0] === "-") {
	    group[field] = group[field].filter((value) => {
		return value !== permName;
	    });
	}

	const groupsData = database.read("memberGroups");
	groupsData[groupName][field] = group[field];
	database.update("memberGroups", groupsData);

	return {
	    string: `${field} field in group ${group.name} is now ${group[field].toString()}`
	};
    }

    //edit anything with ids
    if (field === "allowedRoles" ||
	field === "disallowedRoles" ||
	field === "allowedMembers" ||
	field === "disallowedMembers") {
	const readId = args[2].slice(1).toUpperCase();

	if (args[2][0] === "+") {
	    if (id.isId(readId) && !group[field].includes(readId)) {
		group[field].push(readId);
	    }
	}

	if (args[2][0] === "-") {
	    group[field] = group[field].filter((value) => {
		return value !== readId;
	    });
	}

	const groupsData = database.read("memberGroups");
	groupsData[groupName][field] = group[field];
	database.update("memberGroups", groupsData);

	return {
	    string: `${field} field in group ${group.name} is now ${group[field].toString()}`
	}
    }
    
    return {string:"nothing happened"};
}

const description = "";

const membergroup = new Command("membergroup", description, exec);
membergroup.executeGroup = groups.everyone;

module.exports = membergroup;
