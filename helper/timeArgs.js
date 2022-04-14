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

const digitCheck = /^[0-9]$/
const letterCheck = /^[a-zA-Z]$/
const timeUnits = new Set(["ms", "s", "m", "h", "d", "w", "mo", "y", "millisecond", "second", "minute", "hour", "day", "week", "month", "year"])

timeArgs.parseInt = (object) => {
    const position = object.currentPos
    const string = object.string
    let positionChange = 0
    
    while (position + positionChange < string.length) {
        if (string[position + positionChange].match(digitCheck)) {
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

timeArgs.parseTimeUnit = (object) => {
    const position = object.currentPos
    const string = object.string
    let positionChange = 0
    
    while (position + positionChange < string.length) {
        if (string[position + positionChange].match(letterCheck)) {
            positionChange++
        } else {
            break
        }
    }
    
    if (positionChange === 0) {
        return null
    }
    
    let value = string.slice(position, position + positionChange)
    if (!timeUnits.has(value)) {
        return null
    }
    
    return {
        currentPos: position + positionChange,
        type: "TIME-UNIT",
        value: value
    }
}


module.exports = timeArgs
