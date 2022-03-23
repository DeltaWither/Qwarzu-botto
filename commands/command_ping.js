 module.exports = {
     "description": "The ping command",
     "function": ping
}

function ping(message) {
    message.reply('Pong!');
}
