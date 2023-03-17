const {Listener} = require("./Listener.js");
const { clientId } = require("../config.json");
const sendmines = require("../commands/command_sendmines.js");

const similarLetters = {
    "а": "a" // cyrillic a
}

const whiteSpace = new Set(["\u0020"]);

const changeSimilarLetters = (string) => {
    let newString = "";
    for (char of string) {
        if (similarLetters[char]) {
            newString += similarLetters[char];
        }
        else {
            newString += char;
        }
    }
    return newString;
}

const removeWhitespace = (string) => {
    let newString = "";
    for (char of string) {
        if (!whiteSpace.has(char)) {
            newString += char;
        }
    }
    return newString;
}

const transformMessage = (string) => {
    let newString = string.toLowerCase();
    newString = changeSimilarLetters(newString);
    newString = removeWhitespace(newString);
    return newString;
}

const exec = async (message) => {
    if (message.author.id === clientId) {
        return;
    }
    
    if (message.channelId == "1068936146639392828" ||
        message.channelId == "1083008582443860100") {
        return;
    }
    
    const transformedMessage = transformMessage(message.content);
    if (transformedMessage.includes("andagi")) {
        let randomNum = Math.floor(Math.random() * 91) + 10; // between 10 and 100
        let response = await sendmines.wrappedExec(message, [message.author.id, randomNum.toString()], {skipExecGroup: true});
        message.reply(response.string);
    }
}

const description = `Listener type: messageCreate

It checks every message to see if "sata andagi" or something similar was said and if so sends someone to the mines`;

const sataAndagiBan = new Listener("sataandagiban", description, exec, "messageCreate")
sataAndagiBan.parent = "root";

module.exports = sataAndagiBan
