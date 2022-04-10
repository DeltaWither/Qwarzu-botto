class Listener {
    constructor(name, description, exec, eventType) {
        this.name = name
        this.description = description
        this.exec = exec
        this.eventType = eventType
    }

    enabled = false
    
    enabledWrapper(object1, object2, object3) {
        if(this.enabled) {
            this.exec(object1, object2, object3)
        }
    }
    
    fullyWrappedExec(object1, object2, object3) {
        this.enabledWrapper(object1, object2, object3)
    }
}

module.exports = {Listener}
