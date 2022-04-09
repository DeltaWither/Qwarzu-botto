const fs = require("fs")

const listenerList = {}

// Not sure why it has to go to ./listeners when . is already the commands folder
const files = fs.readdirSync("./listeners");

for (const fileIndex in files) {
    if(files[fileIndex].startsWith("listener_")) {
        const listener = require("./" + files[fileIndex])
        listenerList[listener.name] = listener
    }
}


const eventTypeList = [
    "messageCreate",
    "messageDelete",
    "messageUpdate"
    //more to be added
]

// Separate all listeners into objects each with a type of listener
const listenerListSeparatedByTypes = {}

for (const eventTypeIndex in eventTypeList) {
    const eventType = eventTypeList[eventTypeIndex]
    listenerListSeparatedByTypes[eventType] = {}
}

for (const listenerName in listenerList) {
    const listener = listenerList[listenerName]
    const listenerType = listener.eventType
    
    listenerListSeparatedByTypes[listenerType][listener.name] = listener
}


//Make master functions that execute all listener functions of their type
const masterFunctions = {}

for (const eventType in listenerListSeparatedByTypes) {
    masterFunctions[eventType] = (object) => {
        for (const listenerName in listenerListSeparatedByTypes[eventType]) {
            listenerList[listenerName].exec(object)
        }
    }
}

module.exports = {
    "listeners": masterFunctions,
    "eventTypeList": eventTypeList
    
};
