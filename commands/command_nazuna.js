module.exports = {
     "description": "Random picture of michiru",
     "function": nazuna
}

function nazuna(message, args) {
    const nazunaArray = [
        "https://cdn.discordapp.com/attachments/709176649278816328/956300316180095016/6.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300316435968050/7.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300316779884565/1.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300333859111012/2.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300334047850586/3.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300334257553478/4.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300334496624690/5.gif",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300338405736548/12.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300338892263484/13.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300339206824076/14.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300339588501514/8.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300339949240330/9.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300340179914772/10.png",
        "https://cdn.discordapp.com/attachments/709176649278816328/956300340469309520/11.png"
    ]
    
    let index = Math.floor(Math.random() * nazunaArray.length)
    
    message.channel.send(nazunaArray[index]);
}
