const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");

const code = async (text) => {
}

const exec = async (message, args) => {
    let text = message.content.slice(5).trim();
    if (text.slice(0, 3) === "```") {
        text = text.slice(text.search("\n"), -3);
    }
    console.log(text);
    result = (await eval(`(async () => {${text}})()`)).toString();
    
    return {
        string: result
    }
}

const description = `Usage: ?sendmines [user] [amount / "free"]

Sends a user to the mines with a specified amount of times to mine to leave. If the second argument is \`free\`, the user is freed from the mines.`;

const _exec = new Command("exec", description, exec)
_exec.executeGroup = groups.admins;
_exec.parent = "root";
_exec.enabled = false;

module.exports = _exec;
