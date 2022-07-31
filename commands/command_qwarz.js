const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const qwarzArray = [
    "https://cdn.discordapp.com/attachments/708715309107904526/718268372562870272/qwarziscute_303.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718268322831007804/qwarziscute_92.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718268285803823104/qwarziscute_78.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718268163061448724/qwarziscute_48.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718267791781920808/qwarziscute_254.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718266379815354468/qwarziscute_62.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718258526945804378/qwarziscute_34.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718229926897123418/qwarziscute_75.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718230480843177994/qwarziscute_18.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/718228016869802064/qwarziscute_33.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/781447292661137428/images_-_2020-11-18T201807.821.jpeg",
    "https://cdn.discordapp.com/attachments/784572267752849428/811805392723116062/r76.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814936667575287848/r18-2.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814936667735588864/r17-4.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814936668405497897/r15-3.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814936668007563314/r16-7.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814936668913795152/r13-3.png",
    "https://media.discordapp.net/attachments/708771270006931538/774627467712397372/QwartzMio.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/814940374098378793/Qwarzy_.png",
    "https://media.discordapp.net/attachments/760276434132009020/778608978309546004/unknown.png",
    "https://cdn.discordapp.com/attachments/708715309107904526/817837024081346610/unknown-61.png",
    "https://media.discordapp.net/attachments/708715309107904526/824589147662581790/Picture1616667625097.png",
    "https://cdn.discordapp.com/attachments/777303536659857429/897605769493643304/20211013_000157.png",
    "https://cdn.discordapp.com/attachments/777303536659857429/897605769770438726/20211013_000242.png",
    "https://cdn.discordapp.com/attachments/777303536659857429/897605769963372565/20211013_000222.png",
    "https://cdn.discordapp.com/attachments/895049319919517696/898088108606750730/1634191155778.png",
    "https://cdn.discordapp.com/attachments/777303536659857429/898103980083789844/20211014_090154.jpg"
];
 
const exec = (message, args) => {
   
    let index = Math.floor(Math.random() * qwarzArray.length)
    
    return {
	string :(qwarzArray[index])
    };
}

const description = `Usage: ?qwarz

Posts a random image of qwarz atarz.`;

const qwarz = new Command("qwarz", description, exec)
qwarz.executeGroup = groups.everyone
qwarz.parent = "randomized";

module.exports = qwarz
