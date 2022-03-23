module.exports = {
     "description": "Random number between 0 and 100",
     "function": canibemod
}

function canibemod(message, args) {
    let number = (Math.random() * 700)
    
    if(number > 699) {
        message.channel.send("yes");
    } else if(number > 698) {
        message.channel.send("idk, can you?");
    } else if(number > 697) {
        message.channel.send("stfu i said no");
    } else {
        message.channel.send("no");
    }
}
