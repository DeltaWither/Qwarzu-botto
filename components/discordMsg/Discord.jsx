import styles from "./Discord.module.css";
import Image from "next/image";

function DiscordBG(props) {
    return (
        <div className={styles.discordbg}>
          {props.children}
        </div>
    );
}

function UserMsg(props) {
    return (
        <div className={styles.container}>
          <Image src="/pfps/DeltaWither.png" width="40px" height="40px" layout="fixed" className={styles.img}/>
          
          <div className={styles.textContainer}>
            <div className={styles.username}>DeltaWither</div>
            <pre className={styles.message}>
              {props.children}
            </pre>
          </div>
        </div>
    );
}

function BotMsg(props) {
    return (
        <div className={styles.container}>
          <Image src="/pfps/QwarzuBotto.png" width="40px" height="40px" layout="fixed" className={styles.img}/>

          <div className={styles.textContainer}>
            <div className={styles.botname}>Qwarzu Botto</div>
            <pre className={styles.message}>
              {props.children}
            </pre>
          </div>
        </div>
    );
}

export {DiscordBG, UserMsg, BotMsg};
