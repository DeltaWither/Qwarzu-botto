# Qwarzu bottu

Qwarzu bottu is a Discord bot written in Javascript used to control commands in Qwarzu Outpostu 

## Installation

To run the bot yourself clone the repository, then at the root create a config.json file with these contents:
```json
{
	"token": "BOT TOKEN",
	"clientId": "BOT ID",
	"guildId": "SERVER ID"
}
```
Then run `npm install` and `npm start` (make sure you are using the latest version). To add your own command, add a file `command_commandName.js` in the commands folder. It must have this format:
## Usage

``` javascript

module.exports = {
     "description": "Description",
     "function": commandName
}

function commandName(message, args) {
  //code here
}

```

Once you're finished, go to the `commands.js` file in the same folder, add the 
```javascript
commandName = require(command_commandName.js)
```
and the 


```javascript
"commandName": commandName
``` 
following the others.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)