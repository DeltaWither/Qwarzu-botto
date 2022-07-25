const { Listener } = require("./Listener.js");
const { individualListeners } = require("./listeners.js");
const { addSchedule } = require("../schedules/schedules.js");
const index = require("../index.js");
const database = require("../helper/database.js");

const exec = async (message) => {
    loadedState = database.read("runningListSched");

    // load listeners
    const listeners = loadedState.listeners;
    for (listenerName of listeners) {
	individualListeners[listenerName].enabled = true;
    }

    // load schedules
    const schedules = loadedState.schedules;
    for (scheduleNode of schedules) {
	// recover message
	const guild = await index.client.guilds.fetch(scheduleNode.message.guildId);
	const channel = await guild.channels.fetch(scheduleNode.message.channelId);
	const message = await channel.messages.fetch(scheduleNode.message.id);
	// next() doesn't get saved in json
	// keep in mind next() exists in case new types of schedules are created like crons
	// if that happens this will need to change
	scheduleNode.next = function () {
	    return this.time + this.interval;
	};
	addSchedule(scheduleNode, scheduleNode.schedule.name, scheduleNode.args, message);
    }
}

const description = `Listener type: ready

When the bot starts it enables listeners and starts schedules that were saved before the bot turned off.`;

const loadRunning = new Listener("loadRunning", description, exec, "ready");
loadRunning.enabled = true //This one needs to be enabled by default

module.exports = loadRunning;
