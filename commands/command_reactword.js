const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
const id = require("../helper/id.js");
const htmlToImg = require("node-html-to-image");

function delay(time) {
    return new Promise((_) => {
        setTimeout(_, time);
    });
}

const exec = async (message, args) => {
    let reactMsg = await id.parseMessage(args[0], message.channel);
    let toReactWith = args.slice(1);
    if (!reactMsg) {
        let channel = null;
        channel = await id.parseChannel(args[0], message.guild);
        if (!channel) {
            return {
                string: "First argument has to be message id or a channel"
            }
        }
        
        reactMsg = await id.parseMessage (args[1], channel);
        toReactWith = args.slice(2);
        
        if (!reactMsg) {
            return {
                string: "Second argument has to be a valid message id"
            }
        }
    }
    
    let reacted = "";
    for (word of toReactWith) {
        escapedWord = word.replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#39;");
         
        if (reactMsg.reactions.cache.size === 20) {
            if (reacted === "") {
                reacted = "nothing ";
            }
            reacted += "(too many reactions in the message).";
            break;
        }
        const image = await htmlToImg({
            puppeteerArgs: { args: ['--no-sandbox'] },
            html: `<html margin="0"><head>
                <meta charset="utf-8">
                <style>
                * {
                    margin: 0;
                    padding: 2px;
                    font-size: 50px;
                }
                body {
                    width: fit-content;
                    height: fit-content;
                    background-color: #313338;
                    color: #dbdee1;
                }
                </style>
            </head>
            <body>${escapedWord}
            </body></html>`
        });
        
        // 50 per hour rate limit
        const emojiPromise = message.guild.emojis.create(image, `reactword`);
        const promises = [delay(3000), emojiPromise];
        const emoji = await Promise.any(promises);
        if (!emoji) {
            if (reacted === "") {
                reacted = "nothing ";
            }
            reacted += "(emoji creation is rate limited)"
            break;
        }
        await reactMsg.react(emoji);
        await emoji.delete();
        reacted += word + " ";
    }
    

    return {
        string: `Reacted with ${reacted}`
    }
}

const description = `Usage: ?reactword [message id in the same channel] [word]
    ?reactword [channel id/mention] [message id in that channel] [word]

Reacts with letter and number emotes to a message in the server. If it's not in the same channel as the command, the first argument has to specify the channel.`;

const reactword = new Command("reactword", description, exec)
reactword.executeGroup = groups.staffAndBoosters;
reactword.parent = "root";

module.exports = reactword;
