import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';
import { JsCode } from './../../../../components/JsCode.jsx';

export default function Schedules() {
    const configjson = `{
    "token": "LNYUbtvrDkgyNJbghggfmhjbmhfBfYNjfTDkFYBKkfjbkDnTfdRDxCFGhjLKNFKccf",
    "clientId": "750099617613348987"
};`;
    return (
        <div className="container">
          <h2>Installing the bot</h2>

          <p>So you are ready to use Qwarzu Botto in your discord server. Well, since the point of this bot is to
            have custom functionality by coding it yourself, one of the admins of the server is gonna have to
            download and host it, ideally someone who can code in javascript. If that's you, then here's how to
            do it.</p>

          <p>First, install node.js. If you are on windows or mac,
            go <a href="https://nodejs.org/en/download/current/">here</a>. If you are on linux just use your
            package manager.</p>

          <p>Now in your terminal (or cmd)
            type <span className="inlineCode">
                   git clone https://github.com/DeltaWither/Qwarzu-botto.git</span> to get the source code.</p>

          <p>In the terminal, go into the Qwarzu Botto folder and
            run <span className="inlineCode">npm install</span> to get all the dependencies</p>

          <p>In this same folder create a file called config.json and open it with a text editor. You'll need to
            type something like this:</p>

          <JsCode>
            {configjson}
          </JsCode>

          <p>In the token field input your bot's token and in the clientId input your bot's ID.</p>

          <p>And that's it. Now invite the bot to your server and
            run <span className="inlineCode">npm start</span> to get the bot online. Try using commands to see if
            it worked.</p>

          <DiscordBG>
            <UserMsg>
              ?ping
            </UserMsg>
            <BotMsg>
              Pong!
            </BotMsg>
          </DiscordBG>
        </div>
    );
}
