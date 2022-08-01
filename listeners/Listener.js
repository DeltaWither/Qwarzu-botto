class Listener {
    constructor(name, description, exec, eventType) {
        this.name = name
        this.description = description
        this.exec = exec
        this.eventType = eventType
	this.parent = null;
    }

    get enabled() {
	return this.parent.enabled && this.#enabled;
    }
    set enabled(bool) {
	this.#enabled = bool;
    }
    #enabled = false;


    async fullyWrappedExec(object1, object2, object3) {
        if(!this.enabled) {
            return;
        }

        try {
            await this.exec(object1, object2, object3)
        } catch(err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
            console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
        }
    }
}

module.exports = {Listener}
