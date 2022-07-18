import { JsCode, getLines } from './../../../../components/JsCode.jsx';
import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';

export default function Commands() {
    const code1 = `const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
  
const exec = (message, args) => {
    message.channel.send("asdf");
}
    
const description = "Sends asdf in chat";

const simple = new Command("simple", description, exec);
simple.executeGroup = groups.everyone;

module.exports = simple;`; 

    const code2 = `const {Command} = require("./Command.js");
const groups = require("../groups/membergroups.js");
  
const exec = (message, args) => {
    if (!args[0]) {
        message.channel.send("asdf");
        return;
    }

    resultString = ""
    for (i = 0; i < parseInt(args[0]); i++) {
        resultString += "asdf";
    }
    message.channel.send(resultString);
}
    
const description = "Sends asdf in chat";

const simple = new Command("simple", description, exec);
simple.executeGroup = groups.everyone;

module.exports = simple;`;
    
    return (
        <div className="container">
          <h2>Commands medium</h2>
          
          <p>Now that you know what commands do, it's time to create one.</p>

          <p>Let's assume we want to create a command called <span className="inlineCode">simple</span>. To
            avoid any fluff, all it will do is reply with a message containing "asdf".</p>

          <p>First, in the commands folder create a file called command_simple.js. The command_ prefix makes
            it automatically be added to the list of commands when you load the bot.</p>

          <p>Now paste this code into the file</p>

          <JsCode>
            {code1}
          </JsCode>

          <p>The first two lines just import the Command class so a command can be created, and the list of
            existing member groups. These two lines are always included, but you can import more things if you
            need (like database functions).</p>

          <JsCode>
            {getLines(code1, 0, 2)}
          </JsCode>

          <p>After that we define <span className="inlineCode">exec</span>, which is the code that gets
            executed when the command is called. It takes two
            arguments: <span className="inlineCode">message</span> and <span className="inlineCode">args</span>
            . <span className="inlineCode">message</span> contains all the information about the message
            that called the command, like the author, the channel, the content and
            more. <span className="inlineCode">args</span> is the array of arguments that came after the command
            (in this case <span className="inlineCode">[]</span> for no arguments)</p>

          <JsCode line={4}>
            {getLines(code1, 3, 6)}
          </JsCode>

          <p>Since all this command does is reply with "asdf", we just use the discord.js function to send a
            message to <span className="inlineCode">message.channel</span> containing "asdf".</p>

          <p>After that we just create a string with a description. Then call
            the <span className="inlineCode">Command</span> constructor to create a command
            called <span className="inlineCode">simple</span>. The first argument of the constructor is the
            name of the command, yes, again. The second argument is the description and the third
            is <span className="inlineCode">exec</span>. This puts everything together.</p>

          <JsCode line={8}>
            {getLines(code1, 7, 10)}
          </JsCode>

          <p>We also assign the group <span className="inlineCode">everyone</span> to the command. This means
            everyone can execute this, as long as you have a group called everyone that does include everyone
            (more on medium member groups)</p>

          <JsCode line={11}>
            {getLines(code1, 10, 11)}
          </JsCode>

          <p>And finally export it so it can be automatically imported on startup.</p>

          <JsCode line={13}>
            {getLines(code1, 12, 13)}
          </JsCode>

          <p>Now run <span className="inlineCode">npm start</span> to start your bot and use the
            command <span className="inlineCode">?simple</span>. That's it.</p>

          <DiscordBG>
            <UserMsg>
              ?simple
            </UserMsg>
            <BotMsg>
              asdf
            </BotMsg>
          </DiscordBG>

          <p>That got old quickly, huh? It's fine, we can spice it up with arguments. Let's say now the command
            takes one argument: an integer representing the number of copies of "asdf". It would look like
            this:</p>

          <JsCode>
            {code2}
          </JsCode>

          <p>In this case we check for the first argument, which is <span className="inlineCode">args[0]</span>.
            If it doesn't exist, we can do the same thing the original command did.</p>

          <p>If there is a first argument, we can use <span className="inlineCode">parseInt</span> to extract
            the number (arguments are always strings) and make copies of "asdf" as shown here.</p>

          <p>Now restart the bot and try it out.</p>
          
          <DiscordBG>
            <UserMsg>
              ?simple
            </UserMsg>
            <BotMsg>
              asdf
            </BotMsg>
            <UserMsg>
              ?simple 5
            </UserMsg>
            <BotMsg>
              asdfasdfasdfasdfasdf
            </BotMsg>
          </DiscordBG>
        </div>
    );
}
