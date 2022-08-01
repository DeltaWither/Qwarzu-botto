const fs = require("fs")

const listenerList = {};
//Make master functions that execute all listener functions of their type
const masterFunctions = {};
const eventTypeList = [
    "channelCreate",
    "channelDelete",
    "channelPinsUpdate",
    "channelUpdate",
    "emojiCreate",
    "emojiDelete",
    "emojiUpdate",
    "error",
    "guildBanAdd",
    "guildBanRemove",
    "guildCreate",
    "guildDelete",
    "guildIntegrationsUpdate",
    "guildMemberAdd",
    "guildMemberAvailable",
    "guildMemberRemove",
    "guildMembersChunk",
    "guildMemberUpdate",
    "guildScheduledEventCreate",
    "guildScheduledEventDelete",
    "guildScheduledEventUpdate",
    "guildScheduledEventUserAdd",
    "guildScheduledEventUserRemove",
    "guildUnavailable",
    "guildUpdate",
    "invalidated",
    "invalidRequestWarning",
    "inviteCreate",
    "inviteDelete",
    "messageCreate",
    "messageDelete",
    "messageDeleteBulk",
    "messageReactionAdd",
    "messageReactionRemove",
    "messageReactionRemoveAll",
    "messageReactionRemoveEmoji",
    "messageUpdate",
    "presenceUpdate",
    "rateLimit",
    "ready",
    "roleCreate",
    "roleDelete",
    "roleUpdate",
    "stageInstanceCreate",
    "stageInstanceDelete",
    "stageInstanceUpdate",
    "stickerCreate",
    "stickerDelete",
    "stickerUpdate",
    "threadCreate",
    "threadDelete",
    "threadListSync",
    "threadMembersUpdate",
    "threadMemberUpdate",
    "threadUpdate",
    "typingStart",
    "userUpdate",
    "voiceStateUpdate",
    "webhookUpdate"
];

const loadListeners = () => {
    const files = fs.readdirSync("./listeners");

    for (const fileIndex in files) {
	if(files[fileIndex].startsWith("listener_")) {
            const listener = require("./" + files[fileIndex])
            listenerList[listener.name] = listener
	}
    }

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

    for (const eventType in listenerListSeparatedByTypes) {
	masterFunctions[eventType] = (object1, object2, object3) => {
            for (const listenerName in listenerListSeparatedByTypes[eventType]) {
		listenerList[listenerName].fullyWrappedExec(object1, object2, object3)
            }
	}
    }
}

module.exports = {
    "individualListeners": listenerList,
    "listeners": masterFunctions,
    "eventTypeList": eventTypeList,
    "loadListeners": loadListeners
};
