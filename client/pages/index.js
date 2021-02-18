import styles from "../styles/Home.module.css";

import Courses from "../components/Courses";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 style={{ margin: 5, fontSize: 50 }}>Welcome!</h1>
        <Courses />
      </main>
    </div>
  )
}
