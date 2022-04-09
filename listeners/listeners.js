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

const masterFunctions = {
    "messageCreate": (object) => object,
    "messageDelete": (object) => object,
    "messageUpdate": (object) => object
    // More to be added
}

// Separate all listeners into objects each with a type of listener

for (const eventType in masterFunctions) {
    masterFunctions[eventType] = (object) => {
        
            console.log("asdsafsafsafdsafsad")
            console.log(listenerList)
        for (const listener in listenerList) {
            console.log(listener)
            if(listenerList[listener].eventType === eventType && listenerList[listener].enabled) {
                listenerList[listener].exec(object)
            }
        }
    }
}

module.exports = masterFunctions;
