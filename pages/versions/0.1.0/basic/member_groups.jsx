import styles from '../../../../styles/Home.module.css'

export default function MemberGroups() {
    return (
        <div className={styles.container}>
            <h2>Member groups basic</h2>
            
            <p>Member groups are similar to Discord roles, but more powerful. While a Discord role is essentially a list of individual members, membership of a member role can depend on individual users, roles the user has, permissions, and potentially any arbitrary rule if you can code, such as their name being a specific way or having been in the server for a certain amount of time.</p>
            
            <p>You can think of it as a black box where you input a user and in return you get whether they belong to the group or not. You can even see that in action with the ?groupcheck command:</p>
            
            <p>?groupcheck admins @DeltaWither</p>
            
            <p>The first argument is the name of an existing group and the second argument is a mention or id of a member. If the member belongs to the group, Qwarzu Botto will say "true", and if not then "false". The command itself has execute group of staffAndDevs, which in Qwarzu Outposto is for Trusty and above, and also the programmeru role.</p>
            
            <p>You can also use the command "?groups" to check all the existing groups in the bot.</p>
            
            <p>Groups also have a description that can be used to explain who each group includes and such stuff.</p>
            
            <p>The point of groups right now is just to allow clean permission checks for commands. A command's execute group is a member group which in this case represents the set of people who can execute it. However, in the future it may be used for more stuff, like who can create and delete commands in the future dashboard, who can access certain information and such.</p>
        </div>
    )
}
