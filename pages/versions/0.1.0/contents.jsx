import styles from '../../../styles/Home.module.css'

export default function v0_1_0index() {
    return (
        <div className={styles.container}>
            <h2>v0.1.0</h2>
            <p>This is the index for the documentation for version 0.1.0 of 
            Qwarzu Botto</p>
            <h3>Basic guide</h3>
            <a href="basic/commands">Commands</a>
            <a href="basic/listeners">Listeners</a>
            <a href="basic/schedules">Schedules</a>
            <a href="basic/member_groups">Member groups</a>
            
            <h3>Medium guide</h3>
            <a href="medium/commands">Commands</a>
            <a href="medium/listeners">Listeners</a>
            <a href="medium/schedules">Schedules</a>
            <a href="medium/member_groups">Member groups</a>
            
            <h3>Advanced guide</h3>
            <a href="advanced/commands">Commands</a>
            <a href="advanced/listeners">Listeners</a>
            <a href="advanced/schedules">Schedules</a>
            <a href="advanced/member_groups">Member groups</a>
        </div>
    )
}
