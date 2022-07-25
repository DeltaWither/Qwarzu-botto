const { MemberGroup } = require("./MemberGroup.js");
const database = require("../helper/database.js");

const groupList = {}

module.exports = groupList

let groups = database.read("memberGroups");
if (!groups) {
    database.create("memberGroups", {
	"everyone": {
            "name": "everyone",
            "description": "",
            "everyone": true
	},
	"staff": { 
            "name": "staff",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"staffWithoutTrial": { 
            "name": "staffWithoutTrial",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"admins": { 
            "name": "admins",
            "description": "",
            "everyone": true,
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"devs": { 
            "name": "devs",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"staffAndDevs": {
            "name": "staffAndDevs",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	"notNewMembers": {
            "name": "notNewMembers",
            "description": "",
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
