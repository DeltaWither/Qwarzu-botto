const groups = require("../groups/membergroups.js")

class Command {
    constructor(name, description, exec) {
        this.name = name
        this.description = description
        this.exec = exec
    }
    
    executeGroup = groups.admins //default
    
    async executePermWrapper(message, args) {
        const isMemberInGroup = await this.executeGroup.checkMember(message.member)
        if (isMemberInGroup) {
            await this.exec(message, args)
        }
    }
    
    async fullyWrappedExec(message, args) {
        await this.executePermWrapper(message, args)
    }
}

module.exports = {Command}
