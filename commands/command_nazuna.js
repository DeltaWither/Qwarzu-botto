const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const nazunaArray = [
    "https://cdn.discordapp.com/attachments/709176649278816328/956300316180095016/6.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300316435968050/7.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300316779884565/1.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300333859111012/2.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300334047850586/3.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300334257553478/4.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300334496624690/5.gif",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300338405736548/12.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300338892263484/13.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300339206824076/14.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300339588501514/8.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300339949240330/9.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300340179914772/10.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956300340469309520/11.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742255362148/cbd14d23f4a3313d1e4e710bf2e85304.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742473449582/810e7f5b7bc686bfb2fc4d4a1d91053d.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695742800613426/sample_93f3329ff9221c48839cb67e7b9a9277.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743073226802/sample_d6aa337c8ac87abd1210e2758ff6993b.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743324880926/sample_71b28df04509fe868a2cf15e74153a99.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/956695743563984896/b4e3e4bc51af2c09a4aca587c0cb7df4.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939264659526/15.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939583430706/16.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957723939956731974/17.png",
    "https://cdn.discordapp.com/attachments/709176649278816328/957728311239385198/18.png",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1224513701885906984/image.png?ex=661dc440&is=660b4f40&hm=31ee3156409ae66645d2da060820af1dfed9d6a80f473103b8e36ed27cecc406&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1224399839371198555/f3e0641c81dea1f1763e044e6a9a6029.png?ex=661d5a35&is=660ae535&hm=4432e976e17a8149076f1625a5e2eed2363d17da3533a086f49f25db2519496b&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1218244950504767548/88362563_p0.png?ex=66196b06&is=6606f606&hm=0f33027f86effb47d6e64a9ff885cdad38b9c15499bb17c2a0120b50c881d0aa&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1218244817377689782/jghdhd.png?ex=66196ae6&is=6606f5e6&hm=277a810defce81776c747ee7208d4ae90aabe74a2326f7c3ccf7c4314a02c11f&",
    "https://media.discordapp.net/attachments/1088936153933172876/1217189888760479774/Screenshot_2023-12-01_at_17-30-09_Lynx.png?ex=6615946b&is=66031f6b&hm=5a28af72bc948b1f10b647e0cc314088463c2400ed0c622cc5917142010fef4d&=&format=webp&quality=lossless&width=295&height=437",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216772823477915688/2y8sMJ3m.png?ex=661d4a7f&is=660ad57f&hm=f913babe303ffe0acc050340f39173dfa3a933d4c8b00b65265cc87e4fccd791&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216761837521997855/Ho2h1NZn.png?ex=661d4044&is=660acb44&hm=83775b1bdaa0626f974f1516f0bf88edfe31a03dea73c4e20620ed0c8e6721f6&,
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216508019618353162/image.png?ex=661c53e1&is=6609dee1&hm=46e4773e2f85cbeb3295762d67361eaf9e53101aa28a28ed6c3e3f8f5ddba8ac&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216479804971290784/nazuna2.png?ex=661c399a&is=6609c49a&hm=3673469270034fec1db636091dec3574ecf8c782e094f5aa9859f1419012cdd7&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216479784914387044/nazuna1.png?ex=661c3995&is=6609c495&hm=481c74ed98890f34b32d3d9ca15b60b4e0ef21ca32c6a00ea372dbc01732e287&",
    "https://cdn.discordapp.com/attachments/1088936153933172876/1216479784469532692/nazina3.png?ex=661c3995&is=6609c495&hm=24aa3683c9f9c5c6886da454843249653a98f923f2f43d267634cb2b12a3ba5e&"
];

const exec = (message, args) => {
   
    let index = Math.floor(Math.random() * nazunaArray.length)
    
    return {
	string: nazunaArray[index]
    };
}

const description = `Usage: ?nazuna

Posts a random image of nazuna from bna.`;

const nazuna = new Command("nazuna", description, exec)
nazuna.executeGroup = groups.everyone
nazuna.parent = "randomized";

module.exports = nazuna
