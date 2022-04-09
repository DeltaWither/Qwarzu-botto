const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");
const { listeners, eventTypeList } = require("./listeners/listeners.js");

const client = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS'] 
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
