const {Listener} = require("./Listener.js")
const { clientId } = require("../config.json");
const database = require("../helper/database.js")

const exec = (message) => {
    if(message.author.id === clientId) {
        return
    }
    
    if(database.read("sexCounter") === false) {
        database.create("sexCounter", {})
    }
    
    if(message.content.toLowerCase().includes("sex")) {
        const object = database.read("sexCounter")
        if(!object.hasOwnProperty(message.author.id)) {
            object[message.author.id] = 1
        } else {
            object[message.author.id] += 1
        }
        
        database.update("sexCounter", object)
    }
}

const description = `Listener type: messageCreate

It checks every message to see if "sex" was said and if so adds 1 point to the author in the sex counter database.`;

const sexCounter = new Listener("sexcounter", description, exec, "messageCreate")
sexCounter.parent = "sex";

module.exports = sexCounter
