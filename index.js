const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");

const client = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS'] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {
    console.log(`${message.author.tag}: ${message.content}`)
    if (message.content === 'ping') {
        message.reply('Pong!');
    }
    
    handleCommand(message);
});

function handleCommand(message) {
    let command = message.content;
    if(command[0] !== "?") {
        return;
    }
    
    console.log(`Command: ${command}`)
    
    let commandAndArgs = command.slice(1).toLowerCase().split(" ")
    
    console.log(`Command and arguments: ${commandAndArgs}`)
    
    let commandName = commandAndArgs[0];
    let args = commandAndArgs.slice(1);
    
    console.log(`Command name: ${commandName}`)
    console.log(`Arguments: ${args}`)
    message.reply(`Command name: ${commandName} \nArguments: ${args}`)
}

client.login(token);





