let id = {}

id.isId = (string) => {
    if(string[0] == "0") {
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
        
    console.log(member)
    
    if(member) {
        return true
    }
    
    return false
}



module.exports = id
