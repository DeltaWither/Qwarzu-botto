const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const memeArray = [
        "https://cdn.discordapp.com/attachments/708715309107904526/813067267663331348/emo_boy-1.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/813629038354497586/honeypie-1.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/843209820978282506/17.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/846425197165936691/namida.mp4",
        "https://cdn.discordapp.com/attachments/787412253388308480/847205766917783606/Stunning.mov",
        "https://cdn.discordapp.com/attachments/708715309107904526/852643910711115776/video0.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/871868738692071514/yt1s.com_-_Gorgeous_Fennec_1080p.mp4",
        "https://cdn.discordapp.com/attachments/709164123602288690/881793625124646922/I_WISH_WE_NEVER_MET.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/881956883202703360/BLOODPOP.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/881957192293560340/fantasize.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/881957985541316678/Better_Now.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/881958600145256478/NAMIDA.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/889266925597769808/afsd.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/889267112957313064/Kill_me.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/909525076473446420/yt5s.com-FVN____ANIMATION_MEME-1080p60.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/911672252943192064/XD_ANIMATION_MEME.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/911674967215706122/HARDER_STRONGER_DAYS_ORIGINAL_MEME_COLLAB_CHINJIRETA.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/912812539564404786/Moonlight_geoxor_meme.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/915639882557300756/yt5s.com-REALITY_____ANIMATION_MEME-1080p60.mp4",
        "https://cdn.discordapp.com/attachments/794367700780318760/893820517700751370/XD_ANIMATION_MEME_Not_For_Kids-720p.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/915640091823714314/yt5s.com-CLOSE_EYES____ANIMATION_MEME_blood_warning-1080p60.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/879053512540061696/strawberry_sweater.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/918206244865572904/video0_11.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/918273383345573898/BETTER_LUCK_NEXT_TIME______ANIMATION_MEME.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/918578856846299176/videoplayback_11.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/918579226754551838/summer_days.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/919279457737515098/sexi.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/919322677817249902/ezgif-7-c6e62e6524f4.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/922988607298473994/MOMMY___ANIMATION_MEME.mp4",
        "https://cdn.discordapp.com/attachments/905343562584059914/934132574559797318/BBY_MY_PHONE_MEME.mp4",
        "https://cdn.discordapp.com/attachments/723599467172986962/925353500806893608/video1_5-2-1-1.mp4",
        "https://cdn.discordapp.com/attachments/930230100111278090/934542873691578408/video0-13-1-1.mov",
        "https://cdn.discordapp.com/attachments/708715309107904526/938117568407945266/HONEYPIE____countryhumans_meme_scramble_for_africa360p.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/938891762603282442/B_UI_LD-A_-B_TC_H_MEME.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303098553106452/18th_birthday_animation_meme_.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303099211636806/awesome_face_song_meme_mv_thing_-3_-D.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303100616732672/aryFfFO.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303101010976778/1-0___ANIMATION_MEME_FLASH_WARNING.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303101778550804/baby_hotline___animation_meme_flash_warning.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303102277681153/air_pod_shotty_PLEASE_FUCKING_KILL_ME.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942303102818725899/2_PHUT_HON_ANIMATION_MEME_TIKTOK_DANCE_ANIMATED.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942521673960280084/videoplayback.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942536938638946334/AFFECTION_MEME.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/942576166248796320/PTEA5D4rdRrCUth0.mp4",
        "https://cdn.discordapp.com/attachments/789550637993164810/945014950554914836/PLUG_ME_IN.mp4",
        "https://cdn.discordapp.com/attachments/708715309107904526/953352318160609310/reggie.mp4"
    ]
    
    let index = Math.floor(Math.random() * memeArray.length)
    
    message.channel.send(memeArray[index]);
}

const description = ""

const meme = new Command("meme", description, exec)
meme.executeGroup = groups.everyone

module.exports = meme
