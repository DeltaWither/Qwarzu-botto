class Listener {
    constructor(name, description, exec, eventType) {
        this.name = name
        this.description = description
        this.exec = exec
        this.eventType = eventType
    }

    enabled = false
    
    async enabledWrapper(object1, object2, object3) {
        if(this.enabled) {
            await this.exec(object1, object2, object3)
        }
    }
    
    async fullyWrappedExec(object1, object2, object3) {
        try {
            await this.enabledWrapper(object1, object2, object3)
        } catch(err) {
            console.log(`=======\n=======\n=======\n=======\n`);
            console.log("Something bad just happened");
            console.log(err);
            console.log(`=======\n=======\n=======\n=======\n`);
        }
    }
}

module.exports = {Listener}
