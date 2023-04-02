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
        return member;
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
        return role
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
        return channel
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
        return emoji
    }
    
    return false
}

id.isChannelMessageId = async (string, channel) => {
    if(!id.isId(string)) {
        return false
    }
    
    let message = null
    
    try {
        message = await channel.messages.fetch(string)
    } catch(err) {}
    
    if(message) {
        return message
    }
    
    return false
}

id.isMemberMention = async (string, guild) => {
    //Sometimes it starts with <@!, sometimes with <@
    let member = await id.isMemberId(string.slice(3, -1), guild);
    if(string.slice(0, 3) === "<@!" &&
       member &&
       string.slice(-1) === ">") {
        return member;
    }
    
    member = await id.isMemberId(string.slice(2, -1), guild);
    if(string.slice(0, 2) === "<@" &&
       member &&
       string.slice(-1) === ">") {
        return member;
    }

    return false
}

id.isRoleMention = async (string, guild) => {
    let role = await id.isRoleId(string.slice(3, -1), guild)
    if(string.slice(0, 3) === "<@&" &&
       role &&
       string.slice(-1) === ">") {
        return role;
    }

    return false
}

id.isChannelMention = async (string, guild) => {
    let channel = await id.isChannelId(string.slice(2, -1), guild);
    if(string.slice(0, 2) === "<#" &&
       channel &&
        string.slice(-1) === ">") {
        return channel
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

id.parseMember = async (string, guild) => {
    let member = await id.isMemberId(string, guild);
    if (member) {
	return member;
    }

    member = await id.isMemberMention(string, guild);
    if (member) {
	return member;
    }
}

id.parseRole = async (string, guild) => {
    let role = await id.isRoleId(string, guild);
    if (role) {
	return role;
    }

    role = await id.isRoleMention(string, guild);
    if (role) {
	return role;
    }
}

id.parseChannel = async (string, guild) => {
    let channel = await id.isChannelId(string, guild);
    if (channel) {
        return channel;
    }

    channel = await id.isChannelMention(string, guild);
    if (channel) {
        return channel;
    }
}

id.parseMessage = async (string, channel) => {
    let message = await id.isChannelMessageId(string, channel);
    if (message) {
        return message;
    }
}

module.exports = id
