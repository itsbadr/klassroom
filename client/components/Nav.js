import styles from "../styles/Nav.module.css";

import { AuthContext } from "../components/AuthContext";

import { useState, useContext } from "react";

export default function Nav() {

    const [ profileName, setProfileName ] = useState(null);

    const [ googleAuth, _ ] = useContext(AuthContext);

    const handleSignIn = () => {

        googleAuth.signIn()
        .then(() => {
            setProfileName(googleAuth.currentUser.get().getBasicProfile().getName());
        });

    }

    const handleSignOut = () => {

        googleAuth.signOut()
        .then(() => {
            setProfileName(null);
        });

    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navMain}>
                <div>
                    <img className={styles.klassroomImage} src="../klassroom.svg" alt="klassroom" />
                </div>
                <div>
                    <h2 className={styles.navTitle}>Klassroom</h2>
                    <h5 className={styles.navDescription}>{`Welcome${ profileName ? " " + profileName + "!" : "!"}`}</h5>
                </div>
            </div>
            {
                profileName
                ?
                <div onClick={handleSignOut} className={styles.signButton}>
                    <h3 style={{ textAlign: "center" }}>SIGN <br />OUT</h3>
                </div>
                :
                <div onClick={handleSignIn} className={styles.signButton}>
                    <h3 style={{ textAlign: "center" }}>SIGN <br />IN</h3>
                </div>
            }
        </nav>
    )
}
