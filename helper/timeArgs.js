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
const timeUnitsToMillis = {
    "ms": 1,
    "millisecond": 1,
    "s": 1000,
    "second": 1000,
    "m": 1000 * 60,
    "minute": 1000 * 60,
    "h": 1000 * 60 * 60,
    "hour": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24,
    "day": 1000 * 60 * 60 * 24,
    "w": 1000 * 60 * 60 * 24 * 7,
    "week": 1000 * 60 * 60 * 24 * 7,
    "mo": 1000 * 60 * 60 * 24 * 7 * 30,
    "month": 1000 * 60 * 60 * 24 * 7 * 30,
    "y": 1000 * 60 * 60 * 24 * 7 * 365,
    "year": 1000 * 60 * 60 * 24 * 7 * 365
}

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

timeArgs.parseSingleTimeAmount = (object) => {
    const position = object.currentPos
    const string = object.string
    
    const int = timeArgs.parseInt({
        currentPos: position,
        string: string
    })
    if (!int) {
        return null
    }
    
    const unit = timeArgs.parseTimeUnit({
        currentPos: int.currentPos,
        string: string
    })
    if(!unit) {
        return null
    }
    
    // Transform to milliseconds
    let value = int.value * timeUnitsToMillis[unit.value]
    
    return {
        currentPos: unit.currentPos,
        type: "SINGLE-TIME-AMOUNT",
        value: value
    }
}

timeArgs.parseTimeAmount = (object) => {
    const position = object.currentPos
    const string = object.string
    let positionChange = 0
    
    let timeAmountArray = []
    let index = 0
    while (true) {
        const timeAmount = timeArgs.parseSingleTimeAmount({
            currentPos: position + positionChange,
            string: string
        })
        if (!timeAmount) {
            break
        }
        
        positionChange = timeAmount.currentPos - position
        timeAmountArray[index] = timeAmount
        index++
    }
    
    if (timeAmountArray.length === 0) {
        return null
    }
    
    // Transform to milliseconds
    let value = 0
    for (timeAmount of timeAmountArray) {
        value += timeAmount.value
    }
    
    return {
        currentPos: position + positionChange,
        type: "TIME-AMOUNT",
        value: value
    }
}


module.exports = timeArgs
