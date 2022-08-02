const { Command } = require("./Command.js")
const { modules } = require("../modules/modules.js")

const exec = (message, args) => {
    const root = modules.root;

    return {
	string: `\`\`\`${printModule(root, "└", true)}\`\`\``
    };
}

const printModule = (module, prevLines, isLast) => {
    let returnString = `${prevLines}${module.name}\n`;
    const childrenLength = module.children.modules.length;
    prevLines = prevLines.slice(0, -1) + isLast ? " " : "|";
    
    for (let i = 0; i < childrenLength; i++) {
	const currentChild = module.children.modules[i];
	const addLines = (i === childrenLength - 1) ? "└" : "├";

	returnString += printModule(currentChild, prevLines + addLines, i === childrenLength);
    }
    
    return `${returnString}`;
} 

const description = `Usage: ?modules

Lists all modules`;

const modulescommand = new Command("modules", description, exec)
modulescommand.parent = "help";

module.exports = modulescommand;
