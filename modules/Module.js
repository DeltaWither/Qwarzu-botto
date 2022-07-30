const groups = require("../groups/membergroups.js");

class Module {
    constructor(name, description, enabled) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
    }

    //command specific
    executeGroup = null;


    parent = null;
    children = {
	modules: [],
	commands: [],
	listeners: [],
	schedules: []
    };
}

module.exports = { Module };
