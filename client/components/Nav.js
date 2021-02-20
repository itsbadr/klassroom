import styles from "../styles/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <h2 style={{ margin: "0px 7px", fontSize: 50, fontWeight: 800 }}>Klassroom</h2>
                <h5 style={{ margin: "0px 10px", fontWeight: 600 }}>Google Classroom, but better <code>....hopefully</code></h5>
            </div>
        </nav>
    )
}
