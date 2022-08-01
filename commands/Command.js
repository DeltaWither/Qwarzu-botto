const groups = require("../groups/membergroups.js")
const { splitWithBrackets } = require("../helper/splitCommand.js");
const commands = require("./commands.js");

class Command {
    constructor(name, description, exec) {
        this.name = name
        this.description = description
        this.exec = exec
	this.parent = null;
    }
    
    get executeGroup() {
	if (this.#executeGroup) {
	    return this.#executeGroup;
	}
	return this.parent.executeGroup;
    }
    set executeGroup(group) {
	this.#executeGroup = group;
    }
    #executeGroup;

    get enabled() {
	return this.parent.enabled && this.#enabled;
    }
    set enabled(bool) {
	this.#enabled = bool;
    }
    #enabled = true;

    defaultOptions = {};
    
    async wrappedExec(message, args, options) {
	if (!options) {
	    options = this.defaultOptions;
	}

	// check enabled
	if (!options || !options.skipEnabled) {
	    if (!this.enabled) {
		return {
		    string: `The command ?${this.name} is disabled`
		};
	    }
	}
	
	// check perms
	if (!options || !options.skipExecGroup) {
	    const isMemberInGroup = await this.executeGroup.checkMember(message.member)
            if (!isMemberInGroup) {
		return {
		    string: `You can't run ?${this.name} because you aren't in group ${this.executeGroup.name}`
		};
	    }
	}

	//eval brackets
	if (!options || !options.skipEvalBrackets) {
	    args = await this.#evalBrackets(message, args);
	}

	try {
            return await this.exec(message, args);
	} catch (err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
	    console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
	    return {
		string: "error"
	    };
	}
    }

    async #evalBrackets(message, args) {
	const newArgs = [];
	for (let i = 0; i < args.length; i++) {
	    const arg = args[i];

	    if (arg.slice(0, 2) === "{?" &&
		arg.slice(-1) === "}") {
		let innerCommand = arg.slice(1, -1);
		innerCommand = splitWithBrackets(innerCommand);

		const commandName = innerCommand[0];
		const innerArgs = innerCommand.slice(1);

		if (!commands[commandName]) {
		    newArgs.push("-");
		    continue;
		};

		const returnedObj = await commands[commandName].wrappedExec(message, innerArgs);
		newArgs.push(returnedObj.string);
	    } else {
		newArgs.push(arg);
	    }
	}
	return newArgs;
    }
}

module.exports = {Command};
