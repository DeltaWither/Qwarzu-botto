# Qwarzu-botto
Bot for actually good custom commands for Qwarzu Outposto

To run the bot yourself clone the repository, then at the root create a config.json file with these contents:
```json
{
	"token": "BOT TOKEN",
	"clientId": "BOT ID",
	"guildId": "SERVER ID"
}
```

Then run npm install and then run npm start (making sure you are using the latest version)
To add your own command, add a file "command_commandName.js" in the commands folder. It must have this format:

```javascript
module.exports = {
     "description": "Random number between 0 and 100",
     "function": commandName
}

function commandName(message, args) {
  //code here
}
```

Once you're finished, go to the commands.js file in the same folder, add the `const commandName = require(command_commandName.js)` and the `"commandName": commandName` following the others.
