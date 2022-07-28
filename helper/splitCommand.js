let splitCommand = {}

splitCommand.splitWithBrackets = (commandString) => {
    const result = [];
    const splits = [0];
    const correctedString = commandString.replace(/\s+/g,' ').trim();
    let bracketCounter = 0;
    let state = "NORMAL";

    for (i = 0; i < correctedString.length; i++) {
	if (state === "NORMAL" && correctedString[i] === " ") {
	    splits.push(i);
	    continue;
	}

	if (state === "NORMAL" && correctedString[i] === "{") {
	    //it's necessary to have a space before starting bracket and after ending bracket
	    if (correctedString[i-1] !== " ") {
		continue;
	    }
	    bracketCounter++;
	    state = "BRACKET";
	    continue;
	}

	if (state === "BRACKET") {
	    if (correctedString[i] === "{") {
		bracketCounter++;
	    }
	    if (correctedString[i] === "}") {
		bracketCounter--;
	    }
	    if (bracketCounter === 0 && correctedString[i+1] === " ") {
		state = "NORMAL";
	    }
	}
    }

    for (i = 0; i < splits.length - 1; i++) {
	result.push(correctedString.slice(splits[i] + 1, splits[i+1]));
    }
    result.push(correctedString.slice(splits[splits.length - 1] + 1));

    return result;
}

module.exports = splitCommand;
