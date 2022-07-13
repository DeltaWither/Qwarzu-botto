import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
    return(
        <header id={styles.mainHeader}>
          <p>Qwarzu Botto</p>

          <div className={styles.links}>
            
            <Link className="linkBox" href="/">
              <a>Main page</a>
            </Link>
            
            <Link className="linkBox" href="/versions/0.1.0/contents">
              <a>0.1.x docs</a>
            </Link>
            
            <a>Previous versions</a>
            
          </div>
        </header>
    );
}
