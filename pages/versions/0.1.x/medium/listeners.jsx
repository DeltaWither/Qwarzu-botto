import { JsCode, getLines } from './../../../../components/JsCode.jsx';
import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';

export default function Listeners() {
    const code1 = `const { Listener } = require("./Listener.js");
const { clientId } = require("../config.json");

const exec = (message) => {
    if(message.author.id === clientId) return;
    message.channel.send(message.content);
}

const description = "Repeats everyone's messages";

const copy = new Listener("copy", description, exec, "messageCreate");

module.exports = copy;`;
    
    return (
        <div className="container">
          <h2>Listeners medium</h2>

          <p>And now it's time to create a listener.</p>

          <p>As you already know, listeners can execute on a lot of different events, so it's important to know
            what you want to do before deciding the type of listener to use.
            <a href="https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-channelCreate"> Here
            </a>'s the full list.</p>

          <p>For this example we're gonna make a listener that takes a message anyone sends and repeats it.
            Since we want to run it every time a message is created, we'll use the
            <a href="https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageCreate"
            > messageCreate</a> event</p>

          <p>Before any code, look at the discord.js docs for events. It specifies parameters, which are objects
            containing information on the event. For example messageCreate has a message parameter, which is the
            object with all of the info about the message that was just created. Other events have different
            parameters, and even 2 or 3 of them, which influences the code for the listener.</p>

          <p>But enough about that, let's make our listener. Its name will be copy, so go to the listeners folder
            and create a listener_copy.js file. The "listener_" prefix makes the bot load it on startup without
            you having to do anything. Now here's the code:</p>

          <JsCode>
            {code1}
          </JsCode>

          <p>Rejoice, it looks very similar to a command. The first two lines are simply importing the Listener
            class (always necessary) and the bot's id (necessary for this particular listener).</p>

          <JsCode>
            {getLines(code1, 0, 2)}
          </JsCode>

          <p>Just like in commands, exec is the function that executes the code of the listener. However, in
            listeners the argumments of exec vary. As you saw earlier in the discord.js docs, messageCreate has
            one parameter, which is the message that was created. That's why in messageCreate listeners it's
            approrpiate for exec to have a "message" parameter. However in messageReactionAdd you would have to
            use a "messageReaction" and a "user" parameters in that order.</p>
          
          <JsCode line={4}>
            {getLines(code1, 3, 4)}
          </JsCode>

          <p>Inside exec we can use the bot's id (add it in config.json) to make sure it doesn't start a loop of
            copying its own messages. If it's not its own message, send message.content to message.channel.</p>

          <JsCode line={4}>
            {getLines(code1, 3, 7)}
          </JsCode>

          <p>Make sure to add a good description and create the listener by using the Listener constructor.
            The first parameter is the name, the second the description, the third the exec function, and the
            fourth is the type of event. All the types of events are named after the discord.js events, so you
            can take it from the docs linked earlier.</p>

          <JsCode line={9}>
            {getLines(code1, 8, 11)}
          </JsCode>

          <p>And finally export it</p>

          <JsCode line={13}>
            {getLines(code1, 12, 13)}
          </JsCode>

          <p>Now start the bot, and the listener will be available. However, it will be disabled by default, so
            enable it first.</p>

          <DiscordBG>
            <UserMsg>
              ?enable copy
            </UserMsg>
            <BotMsg>
              Listener copy has been enabled
            </BotMsg>
            <UserMsg>
              hi there
            </UserMsg>
            <BotMsg>
              hi there
            </BotMsg>
          </DiscordBG>

          <p>If you want the listener to be enabled on startup, you can add this line.</p>

          <JsCode>
            copy.enabled = true;
          </JsCode>

          <p>Together with everything else it looks like this.</p>

          <JsCode>
            {getLines(code1, 0, 11) +
             `\ncopy.enabled = true;\n` +
             getLines(code1, 11, 14)}
          </JsCode>

          <p>The ?enable and ?disable commands switch that enabled field on and off, so if you set it in this
            file it will be enabled by default.</p>
        </div>
    );
}
