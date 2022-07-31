const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const b3Array = [
    "https://cdn.discordapp.com/avatars/273927241384329216/0aa355067048e94f23bad0998b2a9ed4.png",
    "https://media.discordapp.net/attachments/738946290930548816/738946709731672104/4c1be7b66e33fe397875b247c5e64d21.png",
    "https://media.discordapp.net/attachments/738946290930548816/738947258774585394/703050f69c1e7516919238d52fce5b1d.png",
    "https://media.discordapp.net/attachments/738946290930548816/738947207402749983/a629bae01e8f41ec9be70715778dd80d.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/824059620322181130/20210322_234729.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946421537112204/Sin-titulo-1.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946449336959046/5f226c30ac0e4.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946543884828677/4wz8qfkpsm853.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946709731672104/4c1be7b66e33fe397875b247c5e64d21.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946821803475025/900.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738946945548288091/3fdcc450afff83db7fb9ddc32e173b4f.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/738947272934424606/d6b360938c236b1d0497130c4c9e1e3c.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/742256052611055686/tdyyIEm.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/758562561754529802/1519955898653.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/768759609321979924/horny-bastard.png",
    "https://cdn.discordapp.com/attachments/738946290930548816/773048019091849226/asd.png"
];

const exec = (message, args) => {
    
    let index = Math.floor(Math.random() * b3Array.length)
    
    return {
	string: (b3Array[index])
    };
}

const description = `Usage: ?b3

Posts a randomized image of b3 (ryuko?)`;

const b3 = new Command("b3", description, exec)
b3.executeGroup = groups.everyone
b3.parent = "randomized";

module.exports = b3
