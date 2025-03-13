const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const michiruArray = [
    "https://cdn.discordapp.com/attachments/708715309107904526/850512045534216192/EnMx-oiXUAYgFvA.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512095627575306/EnzqmWOUcAMNdbG.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512133232918568/EnO-ITFVQAE3fsG.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512191342116904/Enj7IwnVkAA-n6P.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512311331586068/Eq_h4gOUcAAE5V8.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512419108683847/EnqRS6VVgAE0NFw.jpg",
    "https://cdn.discordapp.com/attachments/708715309107904526/850512563397197874/EjFcQTAVoAEAeYk.jpg",
    "https://cdn.discordapp.com/attachments/1349495490873655369/1349495500390273125/HD-wallpaper-michiru-art-brand-new-animal-michiru-kagemori.jpg",
    "https://media.discordapp.net/attachments/1349495490873655369/1349497431175462923/Michiru_and_Nazuna_in_Animedia_Spread_BNA.webp",
    "https://media.discordapp.net/attachments/1349495490873655369/1349497654115172463/IMG_6804.webp",
    "https://media.discordapp.net/attachments/1349495490873655369/1349497828308816024/DEAR.webp",
    "https://media.discordapp.net/attachments/1349495490873655369/1349498682411585556/image.png",
    "https://media.discordapp.net/attachments/1349495490873655369/1349500657073393785/kagemori_michiru_and_hiwatashi_nazuna_brand_new_animal_drawn_by_tsunemoku__sample-1b47ed7c2aeffe679d2272bd9b1e2c6b.jpg",
    "https://media.discordapp.net/attachments/1349495490873655369/1349500861193388143/kagemori_michiru_and_hiwatashi_nazuna_brand_new_animal_drawn_by_dreamsyndd__sample-1c8f716bb3467575f0da950263346501.jpg",
    "https://media.discordapp.net/attachments/1349495490873655369/1349501011529695356/kagemori_michiru_hiwatashi_nazuna_ogami_shirou_jackie_kuro_and_1_more_brand_new_animal_drawn_by_hoyon__sample-40bbe0f6b2718d3e59f52b95b59d13b4.jpg",
    "https://media.discordapp.net/attachments/1349495490873655369/1349501649663819958/kagemori_michiru_brand_new_animal_drawn_by_jeff_miga__sample-4dfec1174c80869a957861b9a7709157.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKo980a6gCHy8SzthXVYoQvzPo_kKlJAvGeQ&s",
    "https://w0.peakpx.com/wallpaper/139/771/HD-wallpaper-michiru-art-brand-new-animal-michiru-kagemori.jpg",
    "https://d.furaffinity.net/art/joakaha/1666310538/1666310538.joakaha_bna_-_michiru_-_kopia.jpg",
    "https://tenor.com/view/michiru-is-cool-gif-22365622"
]
const exec = (message, args) => {   
    let index = Math.floor(Math.random() * michiruArray.length)
    
    return {
	string: michiruArray[index]
    };
}

const description = `Usage: ?michiru

Posts a random image of michiru from bna.`;

const michiru = new Command("michiru", description, exec)
michiru.executeGroup = groups.everyone
michiru.parent = "randomized";

module.exports = michiru
