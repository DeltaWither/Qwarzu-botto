const {Command} = require("./Command.js")
const database = require("../helper/database.js")

const exec = (message, args) => {
    const method = args[0]
    const file = args[1]
    let object
    if(args.length >= 2) {
        object = JSON.parse(args.slice(2).join(" "))
    }
    
    database[method](file, object)
}

const description = ""

const dbTest = new Command("dbtest", description, exec)

module.exports = dbTest
