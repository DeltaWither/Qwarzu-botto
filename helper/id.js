let id = {}

id.isId = (string) => {
    if(string[0] === "0") {
        return false;
    }
    
    return Number.isInteger(Number(string));
}

id.isMemberId = async (string, guild) => {
    if(!id.isId(string)) {
        return false
    }
    
    let member = null
    
    try {
        member = await guild.members.fetch(string)
    } catch(err) {}
    
    if(member) {
        return true
    }
    
    return false
}

id.isRoleId = async (string, guild) => {
    if(!id.isId(string)) {
        return false
    }
    
    let role = null
    
    try {
        role = await guild.roles.fetch(string)
    } catch(err) {}
    
    if(role) {
        return true
    }
    
    return false
}

id.isChannelId = async (string, guild) => {
    if(!id.isId(string)) {
        return false
    }
    
    let channel = null
    
    try {
        channel = await guild.channels.fetch(string)
    } catch(err) {}
    
    if(channel) {
        return true
    }
    
    return false
}

//isGuildEmojiId doesn't check default emojis
id.isGuildEmojiId = async (string, guild) => {
    if(!id.isId(string)) {
        return false
    }
    
    let emoji = null
    
    try {
        emoji = await guild.emojis.fetch(string)
    } catch(err) {}
    
    if(emoji) {
        return true
    }
    
    return false
}

id.isMemberMention = async (string, guild) => {
    if(string.slice(0, 3) === "<@!" &&
        await id.isMemberId(string.slice(3, -1), guild) &&
        string.slice(-1) === ">") {
        return true
    }
    return false
}

id.isRoleMention = async (string, guild) => {
    if(string.slice(0, 3) === "<@&" &&
        await id.isRoleId(string.slice(3, -1), guild) &&
        string.slice(-1) === ">") {
        return true
    }
    return false
}

id.isChannelMention = async (string, guild) => {
    if(string.slice(0, 2) === "<#" &&
        await id.isChannelId(string.slice(2, -1), guild) &&
        string.slice(-1) === ">") {
        return true
    }
    return false
}

id.isGuildEmoji = async (string, guild) => {
    let emojiIdPosition = string.search(/[1-9][0-9]*/) //regex for an integer starting with 1-9
    let emojiId = string.slice(emojiIdPosition, -1)
    let emojiName
    
    if(!await id.isGuildEmojiId(emojiId, guild)) {
        return false
    }
    
    emojiName = ( await guild.emojis.fetch(emojiId) ).name
    
    if(string.slice(0, 2) === "<:" &&
        string.slice(2, 2 + emojiName.length + 1) === emojiName + ":" &&
        string.slice(-1) === ">") {
        return true
    }
    return false
}



module.exports = id
