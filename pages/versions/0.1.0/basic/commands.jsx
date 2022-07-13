export default function Commands() {
    return (
        <div className="container">
          <h2>Commands basic</h2>
          
          <p>Commands are the most basic part of any bot, and they work just like you would expect. For example,
            to run the "test" command that comes by default, just type the message "?test". The question mark is
            the prefix that tells the bot this is a command. Once the bot sees the message, it will execute some
            code, and in the case of ?test, it will output a random number from 1 to 100.</p>
          
          <p>Commands can also have arguments. For example, the "dm" command is used like this:</p>
          
          <p>?dm @DeltaWither hi there</p>
          
          <p>Each group of characters separated by spaces is an argument. In the case of "?dm", the first
            argument ("@DeltaWither") is a mention or id of the user to DM, and the rest of the arguments ("hi"
            and "there") are just text that will be joined together by spaces again.</p>
          
          <p>Commands also (in theory) have descriptions that explain what they do. Sadly, I was too lazy to give
            them all their descriptions for this version, but the idea is to have some sort of ?help command that
            can explain how other commands work by displaying their descriptions.</p>
          
          <p>Lastly, commands also have execution groups. Those are member groups used to decide if the command
            should be executed or not depending on who called it. That's useful for commands such as ?ban, which
            if you decide to implement, you DEFINITELY don't want it to be accessible to the random dude who
            spends hours spamming borderline nsfw memes on #shitpost</p>
        </div>
    )
}
