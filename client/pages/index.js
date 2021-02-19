import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Klassroom from "../components/Klassroom";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <Klassroom />
        <Courses />
      </div>
    </main>
  )
}
