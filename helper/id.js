let id = {}

id.isId = (string) => {
    if(string[0] == "0") {
        return false;
    }
    
    return Number.isInteger(Number(string));
}



module.exports = id
