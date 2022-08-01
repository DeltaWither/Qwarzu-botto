const { Command } = require("./Command.js");
const { commandList } = require("./commands.js");
const { individualListeners } = require("../listeners/listeners.js");
const { schedules } = require("../schedules/schedules.js");
const { modules } = require("../modules/modules.js");
const groups = require("../groups/membergroups.js");

const exec = (message, args) => {
    const type = args[0];
    const name = args[1];
    if (!type || !name) {
	return {
	    string: description
	}
    }

    switch (type) {
    case "com":
	return disableCommand(name);
	break;
    case "lis":
	return disableListener(name);
	break;
    case "sch":
	return disableSchedule(name);
	break;
    case "mod":
	return disableModule(name);
	break;
    }
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        return {
	    string:`Listener ${listenerName} doesn't exist`
	};
    }
    
    individualListeners[listenerName].enabled = false;
    return {
	string: `Listener ${listenerName} has been disabled`
    };
}

const disableCommand = (name) => {
    if (!commandList[name]) {
        return {
	    string:`Command ${name} doesn't exist`
	};
    }

    commandList[name].enabled = false;
    return {
	string: `Command ${name} has been disabled`
    };
}

const disableListener = (name) => {
    if (!individualListeners[name]) {
        return {
	    string:`Listener ${name} doesn't exist`
	};
    }

    individualListeners[name].enabled = false;
    return {
	string: `Listener ${name} has been disabled`
    };
}

const disableSchedule = (name) => {
    if (!schedules[name]) {
        return {
	    string:`Schedule ${name} doesn't exist`
	};
    }

    schedules[name].enabled = false;
    return {
	string: `Schedule ${name} has been disabled`
    };
}

const disableModule = (name) => {
    if (!modules[name]) {
        return {
	    string:`Module ${name} doesn't exist`
	};
    }

    modules[name].enabled = false;
    return {
	string: `Module ${name} has been disabled`
    };
}

const description = `Usage: ?disable [com/lis/sch/mod] [listener name]

Disables an enabled command, listener, schedule or module.`;

const disable = new Command("disable", description, exec)
disable.parent = "system";

module.exports = disable
