import styles from "../styles/Nav.module.css";

import { AuthContext } from "../components/AuthContext";

import { useState, useContext } from "react";

export default function Nav() {

    const [ profileName, setProfileName ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const [ googleAuth, _ ] = useContext(AuthContext);

    const handleSignIn = () => {

        setLoading(true);

            googleAuth.signIn()
            .then(() => {
                setProfileName(googleAuth.currentUser.get().getBasicProfile().getName());
                setLoading(false);
            })
            .catch(() => {
                setProfileName(null);
                setLoading(false);

            });
    }

    const handleSignOut = () => {

        setLoading(true);

        googleAuth.signOut()
        .then(() => {
            setProfileName(null);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
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
                    <img hidden={!loading} className={styles.loading} src="../klassroom.svg" alt="loading" />
                    <h3 className={styles.signText}>Sign out</h3>
                </div>
                :
                <div onClick={handleSignIn} className={styles.signButton}>
                    <img hidden={!loading} className={styles.loading} src="../klassroom.svg" alt="loading" />
                    <h3 className={styles.signText}>{loading ? "Signing in..." : "Sign in"}</h3>
                </div>
            }
        </nav>
    )
}
