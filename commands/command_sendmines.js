const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const id = require("../helper/id.js");
const database = require("../helper/database.js");
const rolepersist = require("./command_rolepersist.js");

const exec = async (message, args) => {
    const member = await id.parseMember(args[0], message.guild);
    const muted = await id.parseRole("710068197566578718", message.guild);
    const miner = await id.parseRole("1092869607032897607", message.guild);
    
    if (!database.read("minescount")) {
        database.create("minescount", {});
    }
    const minesCount = database.read("minescount");
    
    if (member && args[1].toLowerCase() === "free") {
        delete minesCount[member.id];
        try {
            await member.roles.remove(muted);
        } catch (err) {}
        try {
            await member.roles.remove(miner);
        } catch (err) {}
        return {
            string: `${member.user.username} is now free from the mines`
        }
    }
    
    const amount = parseInt(args[1]);
    if (!member || !amount) {
        return {
            string: "Use ?sendmines [user] [amount]"
        }
    }
    
    try {
        await member.roles.add(muted);
    } catch (err) {}
    try {
        await member.roles.add(miner);
    } catch (err) {}


    
    minesCount[member.id] = amount;
    database.update("minescount", minesCount);
    
    

    return {
        string: `${member.user.username} is now in the mines until he mines ${amount} times lmao`
    }
}

const description = `Usage: ?sendmines [user] [amount / "free"]

Sends a user to the mines with a specified amount of times to mine to leave. If the second argument is \`free\`, the user is freed from the mines.`;

const sendmines = new Command("sendmines", description, exec)
sendmines.executeGroup = groups.staff;
sendmines.parent = "mines";

module.exports = sendmines;
