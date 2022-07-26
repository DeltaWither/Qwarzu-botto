const {Command} = require("./Command.js")
const groups = require("../groups/membergroups.js")

const eightball = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
    'No way.',
    'Maybe',
    'The answer is hiding inside you',
    'No.',
    'Depends on the mood of the CS god',
    '||No||',
    '||Yes||',
    'Hang on',
    'It\'s over',
    'It\'s just the beginning',
    'Good Luck',
];

const exec = (message, args) => {
    if (!args[0]) {
        return {
	    string: 'Please ask me a question.'
	};
    } else {
        let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
	return {
	    string: eightball[index]
	};
    }
}

const description = `Usage: ?8ball [question]

Answers any question with perfect precision and understanding`;

const _8ball = new Command("8ball", description, exec)
_8ball.executeGroup = groups.everyone

module.exports = _8ball
