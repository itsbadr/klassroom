import styles from "../styles/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <h2 style={{ margin: "0px 10px" }}>KLASSROOM</h2>
                <h5 style={{ margin: "0px 10px" }}>Google Classroom, but better <code>....hopefully</code></h5>
            </div>
        </nav>
    )
}