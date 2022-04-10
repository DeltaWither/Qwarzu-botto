const {Listener} = require("./Listener.js")

const exec = async (oldPresence, newPresence) => {
    const guild = newPresence.guild
    const member= await guild.members.fetch(newPresence.userId)
    const user = member.user
    const lobby = await guild.channels.fetch("708715309107904526")
    const genshinRole = await guild.roles.fetch("947201276146511873")
    
    const activities = newPresence.activities
    
    for(activityIndex in activities) {
        const activity = activities[activityIndex]
        if(activity.type === "PLAYING" && activity.name.toLowerCase().includes("genshin")) {
            member.roles.add(genshinRole)
        }
    }
}

const description = ""

const genshinRole = new Listener("genshinrole", description, exec, "presenceUpdate")

module.exports = genshinRole
