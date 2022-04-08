const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");
const commands = require("./commands/commands.js");

const client = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS'] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
    console.log(`${message.author.tag}: ${message.content}`)
    
    await handleCommand(message);
});

async function handleCommand(message) {
    let command = message.content;
    if(command[0] !== "?") {
        return;
    }
    
    let commandAndArgs = command.slice(1).toLowerCase().split(" ")
    
    let commandName = commandAndArgs[0];
    let args = commandAndArgs.slice(1);
    
    if(commands[commandName]) {
        try{
            await commands[commandName].exec(message, args);
        }
        catch(err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
            console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
        }
    }
}


client.login(token);





