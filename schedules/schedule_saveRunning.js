const { Schedule } = require("./Schedule.js");
const { individualListeners } = require("../listeners/listeners.js");
const { schedulesQueue } = require("./schedules.js");
const database = require("../helper/database.js");

const exec = async (message, args, timeObject) => {
    if (database.read("runningListSched") === false) {
	database.create("runningListSched", {});
    }

    const newState = {
	"listeners": [],
	"schedules": []
    };

    //save listeners
    for (listenerKey in individualListeners) {
	const listener = individualListeners[listenerKey];

	if (listener.enabled) {
	    newState.listeners.push(listener.name);
	}
    }

    //save schedules
    const nodes = schedulesQueue.traverseTree();
    for (node of nodes) {
	newState.schedules.push(node.value);
    }

    database.update("runningListSched", newState);
}

const description = "";

const saveRunning = new Schedule("saveRunning", description, exec);

module.exports = saveRunning;
