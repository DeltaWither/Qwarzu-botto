const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

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
    "https://cdn.discordapp.com/attachments/709176649278816328/956300340469309520/11.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742255362148/cbd14d23f4a3313d1e4e710bf2e85304.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742473449582/810e7f5b7bc686bfb2fc4d4a1d91053d.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742800613426/sample_93f3329ff9221c48839cb67e7b9a9277.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743073226802/sample_d6aa337c8ac87abd1210e2758ff6993b.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743324880926/sample_71b28df04509fe868a2cf15e74153a99.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743563984896/b4e3e4bc51af2c09a4aca587c0cb7df4.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939264659526/15.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939583430706/16.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939956731974/17.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957728311239385198/18.png"
];

const exec = (message, args) => {
   
    let index = Math.floor(Math.random() * nazunaArray.length)
    
    return {
	string: nazunaArray[index]
    };
}

const description = `Usage: ?nazuna

Posts a random image of nazuna from bna.`;

const nazuna = new Command("nazuna", description, exec)
nazuna.executeGroup = groups.everyone
nazuna.parent = "randomized";

module.exports = nazuna
