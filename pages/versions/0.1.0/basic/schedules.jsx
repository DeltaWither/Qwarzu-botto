export default function Schedules() {
    return (
        <div className="container">
            <h2>Schedules basic</h2>
            
            <p>If listeners run on specific events, schedules run on specific times. There really isn't much more to them. They can run any number of times (including infinite), with regular intervals down to 1 millisecond, starting at any point in time.</p>
            
            <p>Schedules also have a name that identifies them and a description to explain what they do.</p>
            
            <p>There are three commands to handle schedules: start, running and stop. ?start is used to start a schedule, and is used like this:</p>
            
            <p>?start say 2m 1h- x5 wazzup</p>
            
            <p>Now, I promise this is simpler than it looks. The first argument is the name of the schedule, which in this case is say. The next 1, 2 or 3 arguments are the time arguments, which specify the starting point, the interval and the amount of times the schedule will run. The rest of the arguments are equivalent to a command's arguments, but used by the schedule. In this case the arguments are the message that will be sent by the bot.</p>
            
            <p>To check what schedules are running, use the ?running command</p>
            
            <p>?running 20</p>
            
            <p>There is one optional argument, which is the number of schedules into the future the bot will display. If it's not specified, it will do 10. They are in order, each with a unique ID, who called it and the name of the schedule. Also note that each schedule will appear multiple times if it runs more than once.</p>
            
            <p>And finally, to stop a schedule just do</p>
            
            <p>?stop 1654857945872910</p>
            
            <p>Where the only argument is the id of the schedule as it appears in ?running.</p>
            
            <p>And now to explain the time arguments, which are actually based on Dyno's arguments in commands such as ?temprole or ?mute. Just like in Dyno, the most basic time argument looks like this</p>
            
            <p>?start say 1h wazzup</p>
            
            <p>Which means the schedule will run once, that amount of time from now. In this case, one hour from now. Of course, you can also do 2h, 1m, 40d, you get it. Here's a full list of time units:</p>
            
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
            
            <p>And here's where it gets a bit wackier than Dyno. If you want to do something like 1 minute 30 seconds, you can do 90s, or you can just do 1m30s. Or even 1s1s1s1s...1s with 90 of those "1s". Basically all of those get added together.</p>
            
            <p>Ok, so what if you want to execute a schedule on an interval? Check this out</p>
            
            <p>?start say 1h- wazzup but infinite</p>
            
            <p>To make an interval, just add a "-" to the end of an amount of time. When the only time argument is an interval, it executes that amount of time from now, and then that amount of time from then, etc. In the case of the command above, it executes 1 hour from now, then 2 hours from now, 3 hours from now, etc. Of course, you can make intervals like 13m2s- too.</p>
            
            <p>With two time arguments, you can specify the starting time and the interval like this:</p>
            
            <p>?start say 3d 2h- wazzup in the future</p>
            
            <p>With the first time argument being a time amount and the second being an interval, it executes after the first amount of time from now, and then on the interval in the second argument. In this case, the bot says "wazzup in the future" starting 3 days from now, and then every 2 hours.</p>
            
            <p>Another possibility with 2 time arguments is specifying an interval and a finite amount of times to execute, like this:</p>
            
            <p>?start say 1h- x3 wazzup 3 times</p>
            
            <p>It works as expected with the time interval, but will stop running after 3 times. Of course you can do any number of times after the x</p>
            
            <p>And finally, 3 arguments to specify starting time, interval and amount of times:</p>
            
            <p>?start say 3h 1m- x10 wazzup but complex</p>
            
            <p>It works as you should expect already. Starts running 3 hours from now, every minute, 10 times</p>
            
            <p>One last thing, "now" is similar to a time amount like 0s or 0m. You can't have an interval now-, but you can use now like</p>
            
            <p>?start say now hi there</p>
            
            <p>Which runs now.</p>
        </div>
    )
}
