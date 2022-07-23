const { MemberGroup } = require("./MemberGroup.js");
const database = require("../helper/database.js");

const groupList = {}

module.exports = groupList

let groups = database.read("memberGroups");
if (!groups) {
    database.create("memberGroups", [
	{
            "name": "everyone",
            "description": "",
            "everyone": true
	},
	{ 
            "name": "staff",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	{ 
            "name": "staffWithoutTrial",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	{ 
            "name": "admins",
            "description": "",
            "everyone": true,
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	{ 
            "name": "devs",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	{
            "name": "staffAndDevs",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	},
	{
            "name": "notNewMembers",
            "description": "",
            "allowedPerms": [
		"ADMINISTRATOR"
            ]
	}
    ]
		   );

    groups = database.read("memberGroups");
}

for (group of groups) {
    const newGroup = new MemberGroup(group.name, group.description)
    
    for (key of Object.keys(group)) {
        newGroup[key] = group[key]
    }
    
    groupList[newGroup.name] = newGroup
}
