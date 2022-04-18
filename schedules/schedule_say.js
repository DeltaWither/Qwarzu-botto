const {Schedule} = require("./Schedule.js")

const exec = (args) => {
    console.log(args)
}

const description = ""

const say = new Schedule("say", description, exec)

module.exports = say
