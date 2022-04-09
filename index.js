const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");
const { listeners, eventTypeList } = require("./listeners/listeners.js");

const client = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_SCHEDULED_EVENTS"] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Adds all listeners
for (const eventIndex in eventTypeList) {
    const eventType = eventTypeList[eventIndex]
    
    client.on(eventType, async object => {
        await listeners[eventType](object)
    });
}


client.login(token);
