const ping = require("./command_ping.js")
const michiru = require("./command_michiru.js")
const test = require("./command_test.js")
const dogga = require("./command_dogga.js")
const meme = require("./command_meme.js")
const b3 = require("./command_b3.js")
const canibemod = require("./command_canibemod.js")
const ces = require("./command_ces.js")
const fledrak = require("./command_fledrak.js")
const gura = require("./command_gura.js")
const konata = require("./command_konata.js")
const mio = require("./command_mio.js")
const qwarz = require("./command_qwarz.js")
const rat = require("./command_rat.js")
const dm = require("./command_dm.js")

commandList = {
    "commands": {
        "description": "List all commands",
        "function": commands
    },
    "ping": ping,
    "michiru": michiru,
    "test": test,
    "dogga": dogga,
    "meme": meme,
    "b3": b3,
    "canibemod": canibemod,
    "ces": ces,
    "fledrak": fledrak,
    "gura": gura,
    "konata": konata,
    "mio": mio,
    "qwarz": qwarz,
    "rat": rat,
    "dm": dm
}

function commands(message, args) {
    commandsString = ""
    for (command in commandList) {
        commandsString = commandsString + command + ", ";
    }
    message.channel.send(commandsString.slice(0, -2));
}

module.exports = commandList;
