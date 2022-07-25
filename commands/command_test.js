const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    let number = Math.floor(Math.random() * 100)
    
    return {
	string: number.toString()
    };
}

const description = `Usage: ?test

Returns a random number from 1 to 100.`;

const test = new Command("test", description, exec)
test.executeGroup = groups.everyone

module.exports = test
