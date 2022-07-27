const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const ratArray = [
    "https://media.discordapp.net/attachments/819012888328011796/819013024953532426/funny_virus-1.png",
    "https://media.discordapp.net/attachments/819012888328011796/819013025196408842/nazrin_dancing.gif",
    "https://media.discordapp.net/attachments/819012888328011796/819013025452785704/dcztbu7-90870e91-596a-4786-b70a-160c4dd05cb4.png",
    "https://media.discordapp.net/attachments/819012888328011796/819013025817952344/unknown-97.png",
    "https://media.discordapp.net/attachments/819012888328011796/819013026270543892/unknown-972.png",
    "https://media.tenor.co/videos/f840b2cc99a5ca1f591d8454e2b6f7a8/mp4",
    "https://media.discordapp.net/attachments/819012888328011796/819019170191638568/1552150948253.gif?width=719&height=663",
    "https://media.discordapp.net/attachments/819012888328011796/819026515303596032/ETB4ZVpUcAAK00_.png?width=726&height=662",
    "https://media.discordapp.net/attachments/819012888328011796/819027602973917254/2Q.png",
    "https://media.discordapp.net/attachments/819012888328011796/819031482671562762/D5NJvCaUYAA1VWT.png?width=624&height=664",
    "https://media.discordapp.net/attachments/819012888328011796/858079140121280542/Tumblr_l_272635504223470.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079183594586152/Tumblr_l_272672534971690.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079225968984094/Tumblr_l_272946674343843.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079258529759262/images-1.png",
    "https://images-ext-2.discordapp.net/external/BkC2mWf51ELN3WUiLzlZj0fQbyZSwpc2TtjC-0KE_jo/https/media.discordapp.net/attachments/709179511102767145/858069561834995722/ezgif-2-d072509cb3c0.gif",
    "https://images-ext-2.discordapp.net/external/DBsUpyDbvKWHcwrTfrJpnT83Ph4Bo2cXIlBJ-Ngt04o/https/media.discordapp.net/attachments/709179511102767145/858069311544229918/555247727961964554.gif",
    "https://media.discordapp.net/attachments/819012888328011796/858079351130947634/6397384i.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079382492020746/20171211_154049.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079415233282058/15045889_p0.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079487459328060/image0-85.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079842573484052/image0-682.png",
    "https://cdn.discordapp.com/attachments/819012888328011796/858079793986928672/E4Vrpl-VcAMlvAS.mp4",
    "https://media.discordapp.net/attachments/819012888328011796/858079663112060938/image0-9-2.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079564680003584/Nazrin_photo_2021-06-04_15-18-21.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079919723511828/-kfi4vp2.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079875239903232/image0-174.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079733090353182/E4mFQgFWQAQGgMc.png",
    "https://media.discordapp.net/attachments/819012888328011796/858079605024751676/1555855478832.png",
    "https://cdn.discordapp.com/attachments/873699856915505212/879348689645232198/hakos_baelz_and_mr_squeaks_hololive_and_1_more_drawn_by_rangu__sample-e4d21f0f371f8cade3b0ac4a686f19.png",
    "https://cdn.discordapp.com/attachments/709253499430371328/939214495799197756/Rat_fans.png"
];

const exec = (message, args) => {
    let index = Math.floor(Math.random() * ratArray.length)
    
    return {
	string: ratArray[index]
    };
}

const description = `Usage: ?rat

Posts an image of a cute uwu rat.`;

const rat = new Command("rat", description, exec)
rat.executeGroup = groups.everyone

module.exports = rat
