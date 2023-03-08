const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const database = require("../helper/database.js");
const rolepersist = require("./command_rolepersist.js");
const id = require("../helper/id.js");

const exec = async (message, args) => {
    const member = await id.parseMember(message.author.id, message.guild);
    if (message.channel.id !== "1083008582443860100") {
        return {
            string: "You can't mine here"
        }
    }
    
    if (!member.roles.has("1083009160507047966")) {
        return {
            string: "You aren't a miner"
        }
    }

    const muted = await id.parseRole("710068197566578718", message.guild);
    const miner = await id.parseRole("1083009160507047966", message.guild);
    
    const mineCount = database.read("minescount");
    if (!mineCount[message.author.id] || mineCount[message.author.id] === 1) {
        delete mineCount[message.author.id];
        try {
            await member.roles.remove(muted);
        } catch (err) {}
        try {
            await member.roles.remove(miner);
        } catch (err) {}
    }
    else {
        mineCount[message.author.id] -= 1;
    }

    database.update("minescount", mineCount);

    if (!mineCount[message.author.id]) {
        return {
            string: `<@${message.author.id}> thanks for your voluntary contribution! Be free.`
        }
    }
    return {
        string: `<@${message.author.id}> only ${mineCount[message.author.id]} "?mine"s left> `
    }
}

const description = `Usage: ?mine

If you are in the mines it gets you closer to leaving`;

const mine = new Command("mine", description, exec)
mine.executeGroup = groups.everyone;
mine.parent = "mines";

module.exports = mine;
