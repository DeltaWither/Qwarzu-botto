const { Command } = require("./Command.js");
const { commandList } = require("./commands.js");
const { individualListeners } = require("../listeners/listeners.js");
const { schedules } = require("../schedules/schedules.js");
const { modules } = require("../modules/modules.js");
const groups = require("../groups/membergroups.js");

const exec = (message, args) => {
    console.log(modules);
    const type = args[0];
    const name = args[1];
    if (!type || !name) {
	return {
	    string: description
	}
    }

    switch (type) {
    case "com":
	return enableCommand(name);
	break;
    case "lis":
	return enableListener(name);
	break;
    case "sch":
	return enableSchedule(name);
	break;
    case "mod":
	return enableModule(name);
	break;
    }
}

const enableCommand = (name) => {
    if (!commandList[name]) {
        return {
	    string:`Command ${name} doesn't exist`
	};
    }

    commandList[name].enabled = true;
    return {
	string: `Command ${name} has been enabled`
    };
}

const enableListener = (name) => {
    if (!individualListeners[name]) {
        return {
	    string:`Listener ${name} doesn't exist`
	};
    }

    individualListeners[name].enabled = true;
    return {
	string: `Listener ${name} has been enabled`
    };
}

const enableSchedule = (name) => {
    if (!schedules[name]) {
        return {
	    string:`Schedule ${name} doesn't exist`
	};
    }

    schedules[name].enabled = true;
    return {
	string: `Schedule ${name} has been enabled`
    };
}

const enableModule = (name) => {
    if (!modules[name]) {
        return {
	    string:`Module ${name} doesn't exist`
	};
    }

    modules[name].enabled = true;
    return {
	string: `Module ${name} has been enabled`
    };
}

const description = `Usage: ?enable [com/lis/sch/mod] [listener name]

Enables a disabled command, listener, schedule or module.`;

const enable = new Command("enable", description, exec)
enable.parent = "system";

module.exports = enable
