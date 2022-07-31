const fs = require("fs");
const database = require("../helper/database");
const commands = require("../commands/commands.js");
const { individualListeners } = require("../listeners/listeners.js");
const { schedules } = require("../schedules/schedules.js");
const groups = require("../groups/membergroups.js");
const { Module } = require("./Module.js");
const path = require("path");

let modules = {};

//export here to be able to import without circular dependencies
module.exports = modules;


const modulesJson = fs.readFileSync("./modules/default_modules.json", "utf8");
modules = JSON.parse(modulesJson);
database.create("modules", modules);

for (moduleName in modules) {
    const preModule = modules[moduleName];
    const thisModule = new Module(moduleName, preModule.description, preModule.enabled);
    
    const parentName = preModule.parent;
    if (parentName) {
	thisModule.parent = modules[parentName];
    }

    const executeGroup = preModule.executeGroup;
    if (executeGroup) {
	thisModule.executeGroup = groups[executeGroup];
    }

    modules[moduleName] = thisModule;
}

//set all children of modules
for (module in modules) {
    const thisModule = modules[module];
    if (thisModule.parent) {
	thisModule.parent.children.modules.push(thisModule);
    }
}

for (command in commands) {
    const thisCommand = commands[command];
    if (!thisCommand.parent) {
	thisCommand.parent = "root";
    }
    thisCommand.parent = modules[thisCommand.parent];
    thisCommand.parent.children.commands.push(thisCommand);
}

for (listener in individualListeners) {
    const thisListener = individualListeners[listener];
    if (!thisListener.parent) {
	thisListener.parent = "root";
    }
    thisListener.parent = modules[thisListener.parent];
    thisListener.parent.children.listeners.push(thisListener);
}

for (schedule in schedules) {
    const thisSchedule = schedules[schedule];
    if (!thisSchedule.parent) {
	thisSchedule.parent = "root";
    }
    thisSchedule.parent = modules[thisSchedule.parent];
    thisSchedule.parent.children.schedules.push(thisSchedule);
}

// Set up filesystem to look like the modules structure
const createDirs = () => {
    createDir("./modules/", modules.root, path.resolve("."));
}

const createDir = (path, thisModule, projPath) => {
    fs.mkdirSync(path + "module_" + thisModule.name);

    for (command of thisModule.children.commands) {
	const target = `${projPath}/commands/command_${command.name}.js`;
	const linkPath = `${path}module_${thisModule.name}/command_${command.name}.js`;
	fs.symlinkSync(target, linkPath, "file");
    }

    for (listener of thisModule.children.listeners) {
	const target = `${projPath}/listeners/listener_${listener.name}.js`;
	const linkPath = `${path}module_${thisModule.name}/listener_${listener.name}.js`;
	fs.symlinkSync(target, linkPath, "file");
    }
    
    for (schedule of thisModule.children.schedules) {
	const target = `${projPath}/schedules/schedule_${schedule.name}.js`;
	const linkPath = `${path}module_${thisModule.name}/schedule_${schedule.name}.js`;
	fs.symlinkSync(target, linkPath, "file");
    }

    for (module of thisModule.children.modules) {
	createDir(`${path}/module_${thisModule.name}/`, module, projPath);
    }
}

try {
    fs.rmSync("./modules/module_root", {recursive: true});
} catch {}
createDirs();
