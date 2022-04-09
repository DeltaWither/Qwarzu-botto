# Qwarzu botto


[![forthebadge](https://forthebadge.com/images/badges/powered-by-pull-requests.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/0-percent-optimized.svg)](https://forthebadge.com)


Qwarzu botto is a Discord bot written in Javascript used to control commands in Qwarzu Outposto

## Installation

To run the bot yourself clone the repository, then at the root create a config.json file with these contents:
```json
{
	"token": "BOT TOKEN"
}
```
Then run `npm install` and `npm start` (make sure you are using the latest version). To add your own command, add a file `command_commandName.js` in the commands folder. It must have this format:
## Usage

``` javascript

const {Command} = require("./Command.js")

const exec = (message, args) => {
	//code here
}

const description = "description here"

const command = new Command("commandName", description, exec)

module.exports = command
```

To add a listener (function that executes after a certain event) add a file `listener_listenerName.js` in the listeners folder. It must have this format:

``` javascript

const {Listener} = require("./Listener.js")

const exec = (object) => {
	//code here
}

const description = "description here"

const listener = new Listener("listenerName", description, exec, "eventType")

module.exports = listener
```
The list of event types is in listeners/listeners.js. There's almost all of the available event types from discord.js, but if you want to add another one or read info on each one go [here.](https://discord.js.org/#/docs/discord.js/stable/class/Client)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
