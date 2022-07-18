import { JsCode, getLines } from './../../../../components/JsCode.jsx';
import { DiscordBG, UserMsg, BotMsg } from './../../../../components/discordMsg/Discord.jsx';

export default function MemberGroups() {
    const code1 = `[
    {
        "name": "everyone",
        "description": "",
        "everyone": true
    },
    { 
        "name": "staff",
        "description": "",
        "allowedRoles": [
            "708715594840801300",
            "708722040286478356",
            "945585653024964721",
            "708716555785076798",
            "709284464563453963"
        ]
    },
    { 
        "name": "staffWithoutTrial",
        "description": "",
        "allowedRoles": [
            "708715594840801300",
            "708722040286478356",
            "945585653024964721",
            "708716555785076798"
        ]
    },
    { 
        "name": "admins",
        "description": "",
        "allowedPerms": [
            "ADMINISTRATOR"
        ]
    },
]`;
    
    return (
        <div className="container">
          <h2>Member groups medium</h2>

          <p>Making member groups can be similar to giving permissions in a specific Discord channel. In a
            channel if you give @everyone a permission but you remove it for a specific role, that removal
            overrides the @everyone for those who have that role. Then if you allow that permission back for
            another role, that overrides the removal of the first role. Then removing or allowing for specific
            people overrides that.</p>

          <p>Member group creation is similar, but there are no perms involved. It's all for membership of a
            group. Permissions in Qwarzu Botto will ask for membership of a certain group instead of the group
            itself having permissions.</p>

          <p>The reason that groups are similar is because there are several levels of allowing and disallowing
            people into a group. To create member groups, go to the groups folder and create a file called
            membergroups.json. Here you need to add the groups the bot will use for its command executions.
            Let's take a few from Qwarzu Outposto.</p>

          <JsCode>
            {code1}
          </JsCode>

          <p>The json file has an array of objects, where each object is a member group. Each member group has
            a <span className="inlineCode">name</span> to refer to it,
            a <span className="inlineCode">description</span> and then a few possible fields to describe who
            is in each group. Here's a list of all of them and their possible values:</p>

          <ul>
            <li><span className="inlineCode">everyone</span> is true or false and includes everyone.</li>
            <li><span className="inlineCode">disallowedPerms</span> is an array of names of permissions taken
              from <a href="https://discord.js.org/#/docs/discord.js/stable/class/Permissions?scrollTo=s-FLAGS">here</a>
              &nbsp;and makes users with those perms not a member of the group.</li>
            <li><span className="inlineCode">allowedPerms</span> same as above but makes users with thoose perms
              members of the group.</li>
            <li><span className="inlineCode">disallowedRoles</span> is an array of ids of roles and makes users
              with these roles not a member of the group.</li>
            <li><span className="inlineCode">allowedRoles</span> same as above but makes users members of the
              group.</li>
            <li><span className="inlineCode">disallowedMembers</span> is an array of ids of specific members
              that aren't members of the group.</li>
            <li><span className="inlineCode">allowedMembers</span> same as above but these members are in the
              group.</li>
          </ul>

          <p>This list is ordered starting with the weakest criteria and ending with the strongest. For example,
            if someone has roles from <span className="inlineCode">disallowedRoles</span>
            &nbsp;and <span className="inlineCode">allowedRoles</span>, they are in the group.</p>
        </div>
    );
}
