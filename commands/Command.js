const groups = require("../groups/membergroups.js")

class Command {
    constructor(name, description, exec) {
        this.name = name
        this.description = description
        this.exec = exec
    }
    
    executeGroup = groups.admins //default
    
    async wrappedExec(message, args, options) {
	// check perms
	if (!options || !options.skipExecGroup) {
	    const isMemberInGroup = await this.executeGroup.checkMember(message.member)
            if (!isMemberInGroup) {
		return {
		    string: `You can't run ?${this.name} because you aren't in group ${this.executeGroup.name}`
		};
	    }
	}
	
        return await this.exec(message, args);
    }
}

module.exports = {Command}
