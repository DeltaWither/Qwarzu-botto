class Command {
  constructor(name, description, exec) {
    this.name = name
    this.description = description
    this.exec = exec
  }
}

module.exports = {Command}
