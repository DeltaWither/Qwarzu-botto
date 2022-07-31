const groups = require("../groups/membergroups.js");

class Module {
    constructor(name, description, enabled) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
    }

    //command specific
    get executeGroup() {
	if (this.#executeGroup) {
	    return this.#executeGroup;
	}
	return this.parent.executeGroup;
    }
    set executeGroup(group) {
	this.#executeGroup = group;
    }
    #executeGroup = null;


    parent = null;
    children = {
	modules: [],
	commands: [],
	listeners: [],
	schedules: []
    };
}

module.exports = { Module };
