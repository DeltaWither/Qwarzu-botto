export default function Listeners() {
    return (
        <div className="container">
            <h2>Listeners basic</h2>
            
            <p>Listeners can be thought of as commands, but better. In fact, commands are handled by a listener, and I think that's really damn cool.</p>
            
            <p>If a command executes certain code on certain keywords starting with "?", (example "?test"), listeners execute certain code on certain Discord events, such as a message being created, a user joining the server, someone changing their status or nickname, etc.</p>
            
            <p>Think about it like this, whenever a message is sent to a channel, Discord tells your computer that a message was created, and gives it info about the message, and then that's used to render the message to the screen. Similarly when someone comes online or goes offline your computer has to know about it as it happens.</p>
            
            <p>Well, that's pretty much what happens with the bot. Discord sends it info about lots of stuff that is constantly happening on the server it's in, and you can use the info that comes with it to do lots of cool stuff.</p>
            
            <p>The most notable example of a listener is "handleCommand". It listens for messages, checks whether they are a command or not, and if they are they get executed.</p>
            
            <p>A listener has a name to identify it, a description that in theory would be useful for a ?help command, some code to execute, and the event type. Examples of event types are message create, message delete and message edit. <a href="https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-channelCreate">Here</a> is the full list in the Event section</p>
            
            <p>Listeners can be enabled or disabled. The only listener enabled by default in this version is handleCommand, so if you want something like the beautiful sexCounter listener to be active, you can use the commands that come with the bot:</p>
            
            <ul>
                <li>?enable 
                    <p>Takes one argument. It enables a listener and is available only for members with admin perm. Example:</p>
                    
                    <p>?enable leaguerole</p>
                </li>
                <li>?disable</li>
                    <p>Takes one argument. It disables a listener and is available only for members with admin perm. Example:</p>
                    
                    <p>?disable leaguerole</p>
                <li>?listeners
                    <p>Doesn't take arguments. It lists all listeners and differentiates enabled from disabled listeners</p>
                </li>
            </ul>
        </div>
    )
}
