const fs = require("fs")

commandList = {}

const loadCommands = () => {
    const files = fs.readdirSync("./commands");

    files.forEach(
	filename => {
            if(filename.startsWith("command_")) {
		const command = require("./" + filename)
		commandList[command.name] = command
            }
	}
    )
}

module.exports = {
    "commandList": commandList,
    "loadCommands": loadCommands
};
