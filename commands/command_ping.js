module.exports = {
     "description": "The ping command",
     "function": ping
}

function ping(message, args) {
    message.reply('Pong!');
}
