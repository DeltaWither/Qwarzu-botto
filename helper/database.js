const fs = require("fs")

let database = {}
const databasePath = "./database"

const setupDB = () => {
    try {
        fs.accessSync(databasePath);
    } catch (err) {
        fs.mkdirSync(databasePath)
    }
}

database.create = (file, object) => {
    setupDB()
    const fileName = databasePath + "/data_" + file
    
    try {
        fs.readSync(fileName)
        //if no error the file already exists
        return false
    } catch(err) {
        try{
            
        fs.writeFileSync(fileName, JSON.stringify(object))
        } catch(err) {console.log(err)}
    }
}

database.read = (file) => {
    const fileName = databasePath + "/data_" + file
    
    try {
        const data = fs.readFileSync(fileName, 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
        return false
    }
}

database.update = (file, object) => {
    const fileName = databasePath + "/data_" + file
    
    try {
        fs.writeFileSync(fileName, JSON.stringify(object))
    } catch(err) {
        return false
    }
}

database.delete = (file) => {
    const fileName = databasePath + "/data_" + file
    
    try {
        fs.unlinkSync(fileName)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}



module.exports = database
