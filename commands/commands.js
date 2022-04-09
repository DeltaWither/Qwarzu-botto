const {Command} = require("./Command.js")
const fs = require("fs")

commandList = {}

//export here to be able to import without circular dependencies
module.exports = commandList;

// Not sure why it has to go to ./commands when . is already the commands folder
const files = fs.readdirSync("./commands");

files.forEach(
    filename => {
        if(filename.startsWith("command_")) {
            const command = require("./" + filename)
            commandList[command.name] = command
        }
    }
)
