const {Schedule} = require("./Schedule.js")

const exec = async (message, args, timeObject) => {
    let string = ""
    if (!args[0]) {
        string = "** **" //empty message
    } else {
        string = args.join(" ")
    }
    
    await message.channel.send(string)
}

const description = ""

const say = new Schedule("say", description, exec)

module.exports = say
