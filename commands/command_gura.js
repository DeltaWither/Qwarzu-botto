const {Command} = require("./Command.js")

const exec = (message, args) => {
    const guraArray = [
        "https://cdn.discordapp.com/attachments/708715309107904526/857469505697218570/86011259_p0_master1200.webp",
        "https://cdn.discordapp.com/attachments/708715309107904526/911360746305232897/unknown.png",
        "https://pbs.twimg.com/media/FCVW7zCXIAEJNa7.jpg:large",
        "https://cdn.discordapp.com/attachments/708715309107904526/909559929357094932/IMG_20210903_140139_685.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/908114391973658644/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908094282362159194/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908094442299359322/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908094140435300412/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908082794851360808/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908082357179908106/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908082140787380294/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/908081048192176168/unknown.png",
        "https://cdn.discordapp.com/attachments/708715309107904526/905537231102545930/E7-0Xe3UcAMwK1d.jpeg",
        "https://cdn.discordapp.com/attachments/708715309107904526/904230801816842240/FB_IMG_1635642307584.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/900417375604715580/Screenshot_20211020-181516_Instagram.jpg",
        "https://cdn.discordapp.com/attachments/743338878009737276/885028895877922846/E8smWv8WEAMWfYi.png",
        "https://cdn.discordapp.com/attachments/749786321060364308/916027894353002587/Gawr.Gura.full.3072782.png"
    ]
    
    let index = Math.floor(Math.random() * guraArray.length)
    
    message.channel.send(guraArray[index]);
}

const description = "Random picture of gura"

const gura = new Command("gura", description, exec)

module.exports = gura
