import { JsCode, getLines } from './../../../../components/JsCode.jsx';
import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';

export default function Schedules() {
    const code1 = `const {Schedule} = require("./Schedule.js");

const exec = async (message, args, timeObject) => {
    let string = "";
    if (!args[0]) {
        string = "** **";
    } else {
        string = args.join(" ");
    }
    
    await message.channel.send(string);
}

const description = "Repeats a message";

const say = new Schedule("say", description, exec);

module.exports = say;`;
    
    return (
        <div className="container">
          <h2>Schedules medium</h2>

          <p>Now let's look at how to create a schedule.</p>

          <p>Schedules are very similar to commands and listeners. Pretty much the only difference in creating
            either of these three is the arguments of the exec function.</p>

          <p>Let's create a <span className="inlineCode">say</span> schedule that takes the arguments and repeats
            them back every execution. Using the <span className="inlineCode">?start</span> command to run it,
            it will look something like this</p>

          <DiscordBG>
            <UserMsg>
              ?start say 2s- x3 hi
            </UserMsg>
            <BotMsg>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
            </BotMsg>
          </DiscordBG>

          <p>Go to the schedules folder and create a file called schedule_say.js. The schedule_ prefix makes it
            so the bot can automatically load it on startup. Then paste this code</p>

          <JsCode>
            {code1}
          </JsCode>

          <p>The first line imports the Schedule class so a schedule can be created.</p>

          <JsCode>
            {getLines(code1, 0, 1)}
          </JsCode>

          <p>Then we define the exec function, which in the case of schedules always has 3
            arguments: <span className="inlineCode">message</span>
            , <span className="inlineCode">args</span> and <span className="inlineCode">timeObject</span>.</p>

          <p>Just like in commands, <span className="inlineCode">message</span> has all the info about the
            message that started the schedule (if any) and <span className="inlineCode">args</span> has the
            arguments it was called with, not including the time arguments.</p>

          <p>However, there's also the <span className="inlineCode">timeObject</span>, which has information
            about all the schedule stuff.</p>

          <ul>
            <li><span className="inlineCode">timeobject.id</span> has the id.</li>
            <li><span className="inlineCode">timeobject.schedule</span> has the schedule it belongs to.</li>
            <li><span className="inlineCode">timeobject.time</span> has the timestamp when it will be
              executed.</li>
            <li><span className="inlineCode">timeobject.interval</span> has the interval in milliseconds if
              any.</li>
            <li><span className="inlineCode">timeobject.amount</span> has an integer representing the amount of
              executions left, or <span className="inlineCode">null</span> for infinite.</li>
            <li><span className="inlineCode">timeobject.next</span> is a function that returns the timestamp of
              the execution after it gets executed at <span className="inlineCode">timeObject.time</span>.</li>
          </ul>

          <p>So we define exec for <span className="inlineCode">say</span>. We don't need to
            use <span className="inlineCode">timeObject</span>, but we
            need <span className="inlineCode">message</span> and <span className="inlineCode">args</span> to
            post in the same channel as the message that called it and doing so with the arguments.</p>

          <JsCode line={3}>
            {getLines(code1, 2, 12)}
          </JsCode>

          <p>Now create a description and create the schedule using
            the <span className="inlineCode">Schedule</span> constructor. The arguments for the constructor are
            the name of the schedule, <span className="inlineCode">description</span> and&nbsp;
            <span className="inlineCode">exec</span>.</p>

          <JsCode line={14}>
            {getLines(code1, 13, 16)}
          </JsCode>

          <p>After that just export it as usual.</p>

          <JsCode line={18}>
            {getLines(code1, 17, 18)}
          </JsCode>

          <p>Now start the bot and try running it with
            the <span className="inlineCode">?start</span> command.</p>
        </div>
    );
}
