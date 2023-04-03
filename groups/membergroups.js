const { MemberGroup } = require("./MemberGroup.js");
const database = require("../helper/database.js");

const groupList = {}

module.exports = groupList

let groups = database.read("memberGroups");
if (!groups) {
    database.create("memberGroups", {
	"everyone": {
            "name": "everyone",
            "description": "Includes everyone",
            "everyone": true
	},
	"staff": { 
            "name": "staff",
            "description": "Includes only mods and admins",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"staffWithoutTrial": { 
            "name": "staffWithoutTrial",
            "description": "Includes mods and admins but not trial",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"admins": { 
            "name": "admins",
            "description": "Includes only those with admin permission",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"devs": { 
            "name": "devs",
            "description": "The devs of the bot",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"staffAndDevs": {
            "name": "staffAndDevs",
            "description": "Includes staff and the devs",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
    "boosters": {
        "name": "boosters",
        "description": "Server boosters",
        "allowedPerms": [
            "ADMINISTRATOR"
        ]
    },
    
    "staffAndBoosters": {
        "name": "staffAndBoosters",
        "description": "Staff and server boosters",
        "allowedPerms": [
            "ADMINISTRATOR"
        ]
    },
	"notNewMembers": {
            "name": "notNewMembers",
            "description": "Everyone except oranges",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	}
    }
		   );

    groups = database.read("memberGroups");
}

for (groupName in groups) {
    const storedGroup = groups[groupName];
    const newGroup = new MemberGroup(groupName, groups[groupName].description);
    
    for (key of Object.keys(storedGroup)) {
        newGroup[key] = storedGroup[key];
    }
    
    groupList[newGroup.name] = newGroup;
}
