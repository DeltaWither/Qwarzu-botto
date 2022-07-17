import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';

export default function Schedules() {
    return (
        <div className="container">
          <h2>Schedules basic</h2>
          
          <p>If listeners run on specific events, schedules run on specific times. There really isn't much more
            to them. They can run any number of times (including infinite), with regular intervals down to 1
            millisecond, starting at any point in time.</p>
          
          <p>Schedules also have a name that identifies them and a description to explain what they do.</p>
          
          <p>There are three commands to handle schedules: <span className="inlineCode">start</span>
            , <span className="inlineCode">running</span> and <span className="inlineCode">stop</span>
            . <span className="inlineCode">?start</span> is used to start a
            schedule, and is used like this:</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say 2m 1h- x5 wazzup
            </UserMsg>
            <BotMsg>
              <div>wazzup</div>
              <div>wazzup</div>
              <div>wazzup</div>
              <div>wazzup</div>
              <div>wazzup</div>
            </BotMsg>
          </DiscordBG>
          
          <p>Now, I promise this is simpler than it looks. The first argument is the name of the schedule, which
            in this case is say. The next 1, 2 or 3 arguments are the time arguments, which specify the starting
            point (<span className="inlineCode">2m</span>), the interval (<span className="inlineCode">1h-</span>
            ) and the amount of times the schedule will run (<span className="inlineCode">x5</span>). The rest of
            the arguments are equivalent to a command's arguments, but used by the schedule. In this case the
            arguments are the message that will be sent by the bot.</p>
          
          <p>To check what schedules are running, use the <span className="inlineCode">?running</span> command.
          </p>
          
          <DiscordBG>
            <UserMsg>
              ?running 20
            </UserMsg>
          </DiscordBG>
          
          <p>There is one optional argument, which is the number of schedules into the future the bot will
            display. If it's not specified, it will do 10. They are in order, each with a unique ID, who called
            it and the name of the schedule. Also note that each schedule will appear multiple times if it runs
            more than once.</p>
          
          <p>And finally, to stop a schedule just do</p>
          
          <DiscordBG>
            <UserMsg>
              ?stop 165485794587291
            </UserMsg>
          </DiscordBG>
          
          <p>Where the only argument is the id of the schedule as it appears in ?running.</p>
          
          <p>And now to explain the time arguments, which are actually based on Dyno's arguments in commands such
            as ?temprole or ?mute. Just like in Dyno, the most basic time argument looks like this</p>
          
          <p>?start say 1h wazzup</p>
          <DiscordBG>
            <UserMsg>
              ?start say 1h wazzup
            </UserMsg>
            <p>1 hour later:</p>
            <BotMsg>
              wazzup
            </BotMsg>
          </DiscordBG>
          
          <p>Which means the schedule will run once, that amount of time from now. In this case, one hour from
            now. Of course, you can also do 2h, 1m, 40d, you get it. Here's a full list of time units:</p>
          
          <ul>
            <li>ms = millisecond</li>
            <li>s = second</li>
            <li>m = minute</li>
            <li>h = hour</li>
            <li>d = day</li>
            <li>w = week</li>
            <li>mo = month</li>
            <li>y = year</li>
          </ul>
          
          <p>And here's where it gets a bit wackier than Dyno. If you want to do something like 1 minute 30
            seconds, you can do <span className="inlineCode">90s</span>, or you can just
            do <span className="inlineCode">1m30s</span> Or even <span className="inlineCode">1s1s...1s</span>
            with 90 of those <span className="inlineCode">1s</span>.
            Basically all of those get added together.</p>
          
          <p>Ok, so what if you want to execute a schedule on an interval? Check this out</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say 1h- wazzup but infinite
            </UserMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup but infinite
            </BotMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup but infinite
            </BotMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup but infinite
            </BotMsg>
            <p>...</p>
          </DiscordBG>
          
          <p>To make an interval, just add a <span className="inlineCode">-</span> to the end of an amount of
            time. When the only time argument is an interval, it executes that amount of time from now, and
            then that amount of time from then, etc. In the case of the command above, it executes 1 hour from
            now, then 2 hours from now, 3 hours from now, etc. Of course, you can make intervals
            like <span className="inlineCode">13m2s-</span> too.</p>
          
          <p>With two time arguments, you can specify the starting time and the interval like this:</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say 3d 2h- wazzup in the future
            </UserMsg>
            <p>3d later...</p>
            <BotMsg>
              wazzup in the future
            </BotMsg>
            <p>2h later...</p>
            <BotMsg>
              wazzup in the future
            </BotMsg>
            <p>2h later...</p>
            <BotMsg>
              wazzup in the future
            </BotMsg>
            <p>...</p>
          </DiscordBG>
          
          <p>With the first time argument being a time amount and the second being an interval, it executes
            after the first amount of time from now, and then on the interval in the second argument. In this
            case, the bot says "wazzup in the future" starting 3 days from now, and then every 2 hours.</p>
          
          <p>Another possibility with 2 time arguments is specifying an interval and a finite amount of times to
            execute, like this:</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say 1h- x3 wazzup 3 times
            </UserMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup 3 times
            </BotMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup 3 times
            </BotMsg>
            <p>1h later...</p>
            <BotMsg>
              wazzup 3 times
            </BotMsg>
          </DiscordBG>
          
          <p>It works as expected with the time interval, but will stop running after 3 times. Of course you can
            do any number of times after the <span className="inlineCode">x</span>.</p>
          
          <p>And finally, 3 arguments to specify starting time, interval and amount of times:</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say 3h 1m- x3 wazzup but complex
            </UserMsg>
            <p>3h later...</p>
            <BotMsg>
              wazzup but complex
            </BotMsg>
            <p>1m later...</p>
            <BotMsg>
              wazzup but complex
            </BotMsg>
            <p>1m later...</p>
            <BotMsg>
              wazzup but complex
            </BotMsg>
          </DiscordBG>
          
          <p>It works as you should expect already. Starts running 3 hours from now, every minute, 3 times</p>
          
          <p>One last thing, <span className="inlineCode">now</span> is similar to a time amount
            like <span className="inlineCode">0s</span> or <span className="inlineCode">0m</span>. You can't
            have an interval <span className="inlineCode">now-</span>, but you can use now like</p>
          
          <DiscordBG>
            <UserMsg>
              ?start say now hi there
            </UserMsg>
            <BotMsg>
              hi there
            </BotMsg>
          </DiscordBG>
          
          <p>Which runs immediately.</p>
        </div>
    );
}
