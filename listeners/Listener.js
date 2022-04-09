class Listener {
    constructor(name, description, exec, eventType) {
        this.name = name
        this.description = description
        this.exec = exec
        this.eventType = eventType
    }

    enabled = false
    
    enabledWrapper(object) {
        if(this.enabled) {
            this.exec(object)
        }
    }
    
    fullyWrappedExec(object) {
        this.enabledWrapper(object)
    }
}

module.exports = {Listener}
