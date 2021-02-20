import styles from "../styles/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <h2 className={styles.navTitle}>Klassroom</h2>
                <h5 className={styles.navDescription}>Google Classroom, but better <code>....hopefully</code></h5>
            </div>
        </nav>
    )
}
