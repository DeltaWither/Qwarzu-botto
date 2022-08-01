class Schedule {
    constructor(name, description, exec) {
        this.name = name
        this.description = description
        this.exec = exec
	this.parent = null;
    }

    get enabled() {
	return this.parent.enabled && this.#enabled;
    }
    set enabled(bool) {
	this.#enabled = bool;
    }
    #enabled = true;
    

    
    async fullyWrappedExec(message, args, timeObject) {
	if (!this.enabled) {
	    return;
	}

	try {
            await this.exec(message, args, timeObject)
        } catch(err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
            console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
        }
    }
}

module.exports = {Schedule}
