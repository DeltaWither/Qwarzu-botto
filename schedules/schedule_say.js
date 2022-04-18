const {Schedule} = require("./Schedule.js")

const exec = async (message, args, time) => {
    let string = "This message was scheduled for timestamp " + time + " with args " + args.toString()
    await message.channel.send(string)
}

const description = ""

const say = new Schedule("say", description, exec)

module.exports = say
