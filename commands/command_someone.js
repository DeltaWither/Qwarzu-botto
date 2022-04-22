const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = async (message, args) => {
    const members = await message.guild.members.fetch()
    const randomMember = members.random()
    
    await message.channel.send(`<@${randomMember.user.id}>`)
}

const description = ""

const someone = new Command("someone", description, exec)
someone.executeGroup = groups.notNewMembers

module.exports = someone
