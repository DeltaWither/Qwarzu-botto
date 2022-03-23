module.exports = {
     "description": "Random number between 0 and 100",
     "function": dogga
}

function dogga(message, args) {
    let number = (Math.random() * 50)
    
    if(number <= 49) {
        message.channel.send("https://cdn.discordapp.com/attachments/354830452508459031/776312792402755614/Untitled276_20201112050941.png");
    } else {
        message.channel.send("https://cdn.discordapp.com/attachments/709253499430371328/776370488271175690/Untitled276_20201112085806.png");
    }
    
}
