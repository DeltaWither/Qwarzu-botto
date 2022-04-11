const {MemberGroup} = require("./MemberGroup.js")
const groups = require("./membergroups.json")

const groupList = {}

module.exports = groupList

for (group of groups) {
    const newGroup = new MemberGroup(group.name, group.description)
    
    for (key of Object.keys(group)) {
        newGroup[key] = group[key]
    }
    
    groupList[newGroup.name] = newGroup
}
