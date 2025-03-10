const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const michiruArray = [
    "https://cdn.discordapp.com/attachments/708715309107904526/850512045534216192/EnMx-oiXUAYgFvA.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512095627575306/EnzqmWOUcAMNdbG.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512133232918568/EnO-ITFVQAE3fsG.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512191342116904/Enj7IwnVkAA-n6P.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512311331586068/Eq_h4gOUcAAE5V8.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512419108683847/EnqRS6VVgAE0NFw.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512563397197874/EjFcQTAVoAEAeYk.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKo980a6gCHy8SzthXVYoQvzPo_kKlJAvGeQ&s",
    "https://w0.peakpx.com/wallpaper/139/771/HD-wallpaper-michiru-art-brand-new-animal-michiru-kagemori.jpg",
    "https://d.furaffinity.net/art/joakaha/1666310538/1666310538.joakaha_bna_-_michiru_-_kopia.jpg"
]

const exec = (message, args) => {   
    let index = Math.floor(Math.random() * michiruArray.length)
    
    return {
	string: michiruArray[index]
    };
}

const description = `Usage: ?michiru

Posts a random image of michiru from bna.`;

const michiru = new Command("michiru", description, exec)
michiru.executeGroup = groups.everyone
michiru.parent = "randomized";

module.exports = michiru
