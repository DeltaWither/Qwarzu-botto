module.exports = {
     "description": "Random number between 0 and 100",
     "function": test
}

function test(message, args) {
    let number = Math.floor(Math.random() * 100)
    
    message.channel.send(number.toString());
}
