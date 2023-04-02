const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const id = require("../helper/id.js");

const emotes = {
    "a": String.fromCodePoint(0x1F1E6),
    "b": String.fromCodePoint(0x1F1E7),
    "c": String.fromCodePoint(0x1F1E8),
    "d": String.fromCodePoint(0x1F1E9),
    "e": String.fromCodePoint(0x1F1EA),
    "f": String.fromCodePoint(0x1F1EB),
    "g": String.fromCodePoint(0x1F1EC),
    "h": String.fromCodePoint(0x1F1ED),
    "i": String.fromCodePoint(0x1F1EE),
    "j": String.fromCodePoint(0x1F1EF),
    "k": String.fromCodePoint(0x1F1F0),
    "l": String.fromCodePoint(0x1F1F1),
    "m": String.fromCodePoint(0x1F1F2),
    "n": String.fromCodePoint(0x1F1F3),
    "o": String.fromCodePoint(0x1F1F4),
    "p": String.fromCodePoint(0x1F1F5),
    "q": String.fromCodePoint(0x1F1F6),
    "r": String.fromCodePoint(0x1F1F7),
    "s": String.fromCodePoint(0x1F1F8),
    "t": String.fromCodePoint(0x1F1F9),
    "u": String.fromCodePoint(0x1F1FA),
    "v": String.fromCodePoint(0x1F1FB),
    "w": String.fromCodePoint(0x1F1FC),
    "x": String.fromCodePoint(0x1F1FD),
    "y": String.fromCodePoint(0x1F1FE),
    "z": String.fromCodePoint(0x1F1FF),
    "0": "0\u20e3",
    "1": "1\u20e3",
    "2": "2\u20e3",
    "3": "3\u20e3",
    "4": "4\u20e3",
    "5": "5\u20e3",
    "6": "6\u20e3",
    "7": "7\u20e3",
    "8": "8\u20e3",
    "9": "9\u20e3"
}

const exec = async (message, args) => {
    let reactMsg = await id.parseMessage(args[0], message.channel);
    let toReactWith = args[1];
    if (!reactMsg) {
        let channel = null;
        channel = await id.parseChannel(args[0], message.guild);
        if (!channel) {
            return {
                string: "First argument has to be message id or a channel"
            }
        }
        
        reactMsg = await id.parseMessage (args[1], channel);
        toReactWith = args[2];
        
        if (!reactMsg) {
            return {
                string: "Second argument has to be a valid message id"
            }
        }
    }
    
    let reacted = "";
    for (char of toReactWith) {
        if (emotes[char]) {
            await reactMsg.react(emotes[char]);
            reacted += char;
        }
    }
    

    return {
        string: `Reacted with ${reacted}`
    }
}

const description = `Usage: ?reactword [message id in the same channel] [word]
    ?reactword [channel id/mention] [message id in that channel] [word]

Reacts with letter and number emotes to a message in the server. If it's not in the same channel as the command, the first argument has to specify the channel.`;

const reactword = new Command("reactword", description, exec)
reactword.executeGroup = groups.staff;
reactword.parent = "root";

module.exports = reactword;
