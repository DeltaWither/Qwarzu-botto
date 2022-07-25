const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const michiruArray = [
        "https://imgur.com/RDi7VaO",
        "https://imgur.com/LzgneTd",
        "https://imgur.com/YRr4m1B",
        "https://imgur.com/6T1EK52",
        "https://imgur.com/UzKLPdf",
        "https://imgur.com/wVQraZT",
        "https://imgur.com/4383OzY",
        "https://imgur.com/7u13tAL",
        "https://imgur.com/3EGAnza",
        "https://imgur.com/KbWDPG9",
        "https://imgur.com/JbP7B78",
        "https://imgur.com/7Bq4boE",
        "https://imgur.com/MftooRf",
        "https://imgur.com/ru8j1yH",
        "https://imgur.com/da7sbSP",
        "https://imgur.com/Szxr6bU",
        "https://imgur.com/zPPN1jz",
        "https://imgur.com/YVPNgpm",
        "https://imgur.com/eaDzlFL",
        "https://imgur.com/1nyIAlk",
        "https://imgur.com/FlR2ocT",
        "https://imgur.com/yWEaTXv",
        "https://imgur.com/q3rwcOy",
        "https://imgur.com/CrNjprE",
        "https://imgur.com/znUujXM",
        "https://imgur.com/K0lk0jk",
        "https://imgur.com/PHvmcx5",
        "https://imgur.com/WfMCHvs",
        "https://imgur.com/KpDLCc2",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512045534216192/EnMx-oiXUAYgFvA.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512095627575306/EnzqmWOUcAMNdbG.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512133232918568/EnO-ITFVQAE3fsG.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512191342116904/Enj7IwnVkAA-n6P.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512311331586068/Eq_h4gOUcAAE5V8.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512419108683847/EnqRS6VVgAE0NFw.jpg",
        "https://cdn.discordapp.com/attachments/708715309107904526/850512563397197874/EjFcQTAVoAEAeYk.jpg"
    ]
    
    let index = Math.floor(Math.random() * michiruArray.length)
    
    return {
	string: michiruArray[index]
    };
}

const description = `Usage: ?michiru

Posts a random image of michiru from bna.`;

const michiru = new Command("michiru", description, exec)
michiru.executeGroup = groups.everyone

module.exports = michiru
