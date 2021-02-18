import styles from "../styles/Home.module.css";

import Klassroom from "../components/Klassroom";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <main>
      <h1 style={{ margin: 5, fontSize: 50 }}>Welcome!</h1>
      <div className={styles.container}>
        <Klassroom />
        <Courses />
      </div>
    </main>
  )
}
