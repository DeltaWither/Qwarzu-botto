const {Listener} = require("./Listener.js")

const exec = async (oldPresence, newPresence) => {
    const guild = newPresence.guild
    const member= await guild.members.fetch(newPresence.userId)
    const user = member.user
    const leagueRole = await guild.roles.fetch("948632679245574245")
    
    const activities = newPresence.activities
    
    for(activityIndex in activities) {
        const activity = activities[activityIndex]
        if(activity.type === "PLAYING" && activity.name.toLowerCase().includes("league of legends")) {
            await member.roles.add(leagueRole)
        }
    }
}

const description = `Listener type: presenceUpdate

Whenever some changes their discord presence, it checks if they are playing league and if so gives them league player role.`;

const leagueRole = new Listener("leaguerole", description, exec, "presenceUpdate")

module.exports = leagueRole
