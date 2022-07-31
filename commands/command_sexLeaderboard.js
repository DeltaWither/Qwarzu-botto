const {Command} = require("./Command.js")
const database = require("../helper/database.js")
const groups = require("../groups/membergroups.js")

const sortSex = (sexCounter) => {
    let sortedArray = []
    const length = Object.keys(sexCounter).length
    for (let i = 0; i < length; i++) {
        sortedArray[i] = {"id": "1", "count": -1}
        for (userId in sexCounter) {
            const count = sexCounter[userId]
            if (count >= sortedArray[i].count) {
                sortedArray[i].id = userId
                sortedArray[i].count = count
            }
        }
        delete sexCounter[sortedArray[i].id]
    }
    return sortedArray
}


const exec = async (message, args) => {
    const sexCounter = database.read("sexCounter")
    const sexLeaderboard = sortSex(sexCounter)
    const quantity = args[0] && args[0] < 40 ? args[0] : 10;
    
    let reply = "Sex counter leaderboard\n-----------------\n"
    for (let i = 0; i < Math.min(quantity, sexLeaderboard.length); i++) {
        let user = message.guild.members.cache.get(sexLeaderboard[i].id);
        
	if (user) {
            reply = reply + user.user.username + ":\t\t" + sexLeaderboard[i].count + "\n"
	} else {
            reply = reply + "Unknown user " + sexLeaderboard[i].id + ":\t\t" + sexLeaderboard[i].count + "\n"
	}
    }
    
    return {
	string: reply,
	useful: sexLeaderboard
    };
}

const description = `Usage: ?sexleaderboard
       ?sexleaderboard [amount <= 40]

Returns the 10 people who have said "sex" the most while the sexCounter listener is enabled.
If you specify an amount 40 or less it will post the top up to that amount.`;

const sexLeaderboard = new Command("sexleaderboard", description, exec)
sexLeaderboard.executeGroup = groups.everyone
sexLeaderboard.parent = "sex";

module.exports = sexLeaderboard
