let timeArgs = {}

/*
 * The object inputs are of the form 
 * {
 *      currentPos: int
 *      string: string
 * }
 * 
 * And the outputs are
 * {
 *      currentPos: int
 *      type: string
 *      (other fields depending on type)
 * }
 * 
 * if the parse is wrong then return null and the next option is tried
 */

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//const timeUnits = ["ms", "s", "m", "h", "d", "w", "mo", "y"]

timeArgs.parseInt = (object) => {
    const position = object.currentPos
    const string = object.string
    let positionChange = 0
    
    while (position + positionChange < string.length) {
        if (string[position + positionChange] in digits) {
            positionChange++
        } else {
            break
        }
    }
    
    if (positionChange === 0) {
        return null
    }
    
    const value = Number(string.slice(position, position + positionChange))
    
    return {
        currentPos: position + positionChange,
        type: "INT",
        value: value
    }
}

module.exports = timeArgs
