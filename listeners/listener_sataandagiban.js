const {Listener} = require("./Listener.js");
const { clientId } = require("../config.json");
const sendmines = require("../commands/command_sendmines.js");

const exec = async (message) => {
    if(message.author.id === clientId) {
        return
    }
    
    if(message.content.toLowerCase().includes("sata andagi") ||
        message.content.toLowerCase().includes("sataandagi") ||
        message.content.toLowerCase().includes("satandagi")
    ) {
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
