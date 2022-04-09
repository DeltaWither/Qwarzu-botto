class Listener {
  constructor(name, description, exec, eventType) {
    this.name = name
    this.description = description
    this.exec = exec
    this.eventType = eventType
  }
  
  enabled = true
}

module.exports = {Listener}
