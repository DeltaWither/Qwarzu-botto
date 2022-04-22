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
const timeLiterals = new Set(["n", "now"])
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

timeArgs.parseTimeLiteral = (object) => {
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
    
    let strValue = string.slice(position, position + positionChange)
    if (!timeLiterals.has(strValue)) {
        return null
    }
    
    let value = 0
    if (strValue === "n" || strValue === "now") {
        value = Date.now()
    }
    
    return {
        currentPos: position + positionChange,
        type: "TIME-LITERAL",
        value: value
    }
}

const parseTimePath1 = (object) => {
    const position = object.currentPos
    const string = object.string
    
    const timeLiteral = timeArgs.parseTimeLiteral({
        currentPos: position,
        string: string
    })
    if (!timeLiteral) {
        return null
    }
    
    if (string[timeLiteral.currentPos] !== "+") {
        return null
    }
    
    const timeAmount = timeArgs.parseTimeAmount({
        currentPos: timeLiteral.currentPos + 1,
        string: string
    })
    if (!timeAmount) {
        return null
    }
    
    const value = timeLiteral.value + timeAmount.value
    
    return {
        currentPos: timeAmount.currentPos,
        type: "TIME",
        value: value
    }
}

const parseTimePath2 = (object) => {
    const position = object.currentPos
    const string = object.string
    
    const timeLiteral = timeArgs.parseTimeLiteral({
        currentPos: position,
        string: string
    })
    if (!timeLiteral) {
        return null
    }
    
    const value = timeLiteral.value
    
    return {
        currentPos: timeLiteral.currentPos,
        type: "TIME",
        value: value
    }
}

const parseTimePath3 = (object) => {
    const position = object.currentPos
    const string = object.string
    
    const timeAmount = timeArgs.parseTimeAmount({
        currentPos: position,
        string: string
    })
    if (!timeAmount) {
        return null
    }
    
    const value = Date.now() + timeAmount.value
    
    return {
        currentPos: timeAmount.currentPos,
        type: "TIME",
        value: value
    }
}

timeArgs.parseTime = (object) => {
    // (TIME-LITERAL)+(TIME-AMOUNT)
    const path1 = parseTimePath1(object)
    
    // (TIME-LITERAL)
    const path2 = parseTimePath2(object)
    
    // (TIME-AMOUNT)
    const path3 = parseTimePath3(object)
    
    let returnObject = null
    
    if (path1) {
        returnObject = path1
    } else if (path2) {
        returnObject = path2
    } else if (path3) {
        returnObject = path3
    }
    
    return returnObject
}

timeArgs.parseAmount = (object) => {
    const position = object.currentPos
    const string = object.string
    
    if (string[position] !== "x") {
        return null
    }
    
    const int = timeArgs.parseInt({
        currentPos: position + 1,
        string: string
    })
    if (!int) {
        return null
    }
    
    const value = int.value
    
    return {
        currentPos: int.currentPos,
        type: "AMOUNT",
        value: value
    }
}

timeArgs.parseInterval = (object) => {
    const position = object.currentPos
    const string = object.string
    
    const timeAmount = timeArgs.parseTimeAmount({
        currentPos: position,
        string: string
    })
    if (!timeAmount) {
        return null
    }
    
    if (string[timeAmount.currentPos] !== "-") {
        return null
    }
    
    const value = timeAmount.value
    
    return {
        currentPos: timeAmount.currentPos + 1,
        type: "INTERVAL",
        value: value
    }
}

const parseArgumentsPath1 = (args) => {
    const time = timeArgs.parseTime({
        currentPos: 0,
        string: args[0]
    })
    if (!time) {
        return null
    }
    
    const interval = timeArgs.parseInterval({
        currentPos: 0,
        string: args[1]
    })
    if (!interval) {
        return null
    }
    
    const amount = timeArgs.parseAmount({
        currentPos: 0,
        string: args[2]
    })
    if (!amount) {
        return null
    }
    
    const timeObject = {
        time: time.value,
        interval: interval.value,
        amount: amount.value,
        next: function () {
            return this.time + this.interval
        }
    }
    
    return timeObject
}

const parseArgumentsPath2 = (args) => {
    const time = timeArgs.parseTime({
        currentPos: 0,
        string: args[0]
    })
    if (!time) {
        return null
    }
    
    const interval = timeArgs.parseInterval({
        currentPos: 0,
        string: args[1]
    })
    if (!interval) {
        return null
    }
    
    const timeObject = {
        time: time.value,
        interval: interval.value,
        amount: null,
        next: function () {
            return this.time + this.interval
        }
    }
    
    
    return timeObject
}

const parseArgumentsPath3 = (args) => {
    const interval = timeArgs.parseInterval({
        currentPos: 0,
        string: args[0]
    })
    if (!interval) {
        return null
    }
    
    const amount = timeArgs.parseAmount({
        currentPos: 0,
        string: args[1]
    })
    if (!amount) {
        return null
    }
    
    const timeObject = {
        time: Date.now() + interval.value,
        interval: interval.value,
        amount: amount.value,
        next: function () {
            return this.time + this.interval
        }
    }
    
    
    return timeObject
}

const parseArgumentsPath4 = (args) => {
    const interval = timeArgs.parseInterval({
        currentPos: 0,
        string: args[0]
    })
    if (!interval) {
        return null
    }
    
    const timeObject = {
        time: Date.now() + interval.value,
        interval: interval.value,
        amount: null,
        next: function () {
            return this.time + this.interval
        }
    }
    
    return timeObject
}

const parseArgumentsPath5 = (args) => {
    const time = timeArgs.parseTime({
        currentPos: 0,
        string: args[0]
    })
    if (!time) {
        return null
    }
    
    const timeObject = {
        time: time.value,
        interval: 9999999999999,
        amount: 1,
        next: function () {
            return this.time + this.interval
        }
    }
    
    
    return timeObject
}


/* wherever parseArguments is used, it's supposed to take all argumens after a certain point, knowing that the first 1, 2 or 3 args are time args. 
 * The output is an object:
 * {
 *      timeObject: {...}
 *      remainingArgs: []
 * }
 * where remainingArgs is an array of the remaining arguments and time object is
 * {
 *      time: 1234567890
 *      amount: 123
 *      interval: 542664
 *      next: () => {...}
 * }
 * 
 * This is so a command that creates a schedule can have time commands anywhere other than just the end. Use the function and take the remaining args for whatever else there is to do
 */
timeArgs.parseArguments = (args) => {
    const paths = []
    if (args.length >= 3) {
        // (TIME) (INTERVAL) (AMOUNT)
        paths[0] = parseArgumentsPath1(args)
        if (paths[0]) {
            return {
                timeObject: paths[0],
                remainingArgs: args.slice(3)
            }
        }
    }
    
    if (args.length >= 2) {
        // (TIME) (INTERVAL)
        paths[1] = parseArgumentsPath2(args)
        if (paths[1]) {
            return {
                timeObject: paths[1],
                remainingArgs: args.slice(2)
            }
        }
        
        // (INTERVAL) (AMOUNT)
        paths[2] = parseArgumentsPath3(args)
        if (paths[2]) {
            return {
                timeObject: paths[2],
                remainingArgs: args.slice(2)
            }
        }
    }
    
    if (args.length >= 1) {
        // (INTERVAL)
        paths[3] = parseArgumentsPath4(args)
        if (paths[3]) {
            return {
                timeObject: paths[3],
                remainingArgs: args.slice(1)
            }
        }
        
        // (TIME)
        paths[4] = parseArgumentsPath5(args)
        if (paths[4]) {
            return {
                timeObject: paths[4],
                remainingArgs: args.slice(1)
            }
        }
    }
    
    return {
        timeObject: null,
        remainingArgs: args
    }
}


module.exports = timeArgs
