const {Listener} = require("./Listener.js");
const { clientId } = require("../config.json");
const sendmines = require("../commands/command_sendmines.js");

const similarLetters = {
    "а": "a", // cyrillic a
    "A": "A",
    "¡": "i",
    "$": "s",
    "α": "a",
    "♰": "t",
    "∩": "n",
    "ძ": "d",
    "ց": "g",
    "ℹ": "i",
    "∫": "s",
    "⟙": "t",
    "⟑": "a",
    "ª": "a",
    "∂": "d",
    "ԍ": "g",
    "⫯": "i",
    "∏": "n",
    "⫒": "d",
    "∀": "a",
    "ѕ": "s",
    "⊺": "t",
    "η": "n",
    "₲": "g",
    "ї": "i",
    "丂": "s",
    "卂": "a",
    "ㄒ": "t",
    "几": "n",
    "ᗪ": "d",
    "Ꮆ": "g",
    "丨": "i",
    "𝖘": "s",
    "𝖆": "a",
    "𝖙": "t",
    "𝖓": "n",
    "𝖉": "d",
    "𝖌": "g",
    "𝖎": "i",
    "ι": "i"
}

const whiteSpace = new Set(["\u000a", "\u0020", "\u00A0", "\u180E", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200a", "\u200b", "\u200c", "\u200d", "\u200e", "\u200f", "\u202f", "\u205f", "\u3000", "\ufeff", "\u00ad", "\u00a0", "\ufe00", "\ufe01", "\ufe02", "\ufe03", "\ufe04", "\ufe05", "\ufe06", "\ufe07", "\ufe08", "\ufe09", "\ufe0a", "\ufe0b", "\ufe0c", "\ufe0d", "\ufe0e", "\ufe0f"]);

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

const removeRepeated = (string) => {
    let newString = string[0];
    for (char of string) {
        if (char != newString[newString.length - 1]) {
            newString += char;
        }
    }
    return newString;
}

const transformMessage = (string) => {
    let newString = string.toLowerCase();
    newString = changeSimilarLetters(newString);
    newString = removeWhitespace(newString);
    newString = removeRepeated(newString);
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
