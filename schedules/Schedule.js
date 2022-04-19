class Schedule {
    constructor(name, description, exec) {
        this.name = name
        this.description = description
        this.exec = exec
    }
    
    async fullyWrappedExec(message, args, timeObject) {
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
