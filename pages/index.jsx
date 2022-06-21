import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Qwarzu Botto documentation</title>
        <meta name="description" content="Documentation for Qwarzu Botto Discord bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>Qwarzu Botto documentation</h1>
        
        <h2>What's Qwarzu Botto?</h2>
        <p>Qwarzu Botto is the most 1337 Discord bot out there, since it can do ANYTHING.</p>
        <p>Right now I don't think a single soul has looked at this outside of Qwarzu Outposto, but if you are, then basically the point of this bot is better custom commands. The bot is completely open source, so anyone can just copy it, host it for their Discord server, and edit or create any command with the full power of Javascript.</p>
        
        <h2>Main features of Qwarzu Botto</h2>
        <p>There are three ways to get the bot to do anything: commands, listeners and schedules.</p>
        <p>Commands are one time executions. You just type "?commandname" in chat and something happens. Listeners get executed on certain events defined by Discord, like a message being sent, a role being created... Schedules execute on certain times, however many times you want.</p>
        <p>Another feature of Qwarzu Botto is member groups, which is this bot's way to handle permissions to execute certain commands. Member groups check whether a member passes certain checks, like having some permission or role, although there is a hacky way to make a group check for whatever you want.</p>
        <p>There is also a folder with helper functions for whatever functionality you may need in different commands, listeners and schedules.</p>
        <p>Lastly, there is a (to be changed) database that consists of JSON files in a database folder and 4 CRUD helper functions. It's not the most sophisticated piece of software, but it's enough for a bunch of stuff.</p>
        <p>All of these features are explained in more detail in their parts of the guide.</p>
        
        <h2>How the guide works</h2>
        <p>Whether you faint on the sight of a line of code or you are a 60 year old Linux kernel hacker with the experience of a thousand senior devs, this guide is fine for you. I'll start explaining the features on a basic level and how to handle them without any coding. Then I'll explain how to create your own commmands, listeners, schedules, groups and such, and in the end I'll explain the entire structure of the bot and how everything ties together under the hood for those who want to go wacky or maybe contribute. You can choose where you want to stop.</p>
        
        <a href="versions/0.1.0/contents">Link to v0.1.0 contents</a>
    </div>
  )
}
