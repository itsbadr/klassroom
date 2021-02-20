import styles from "../styles/Home.module.css";

import { FoldersProvider } from "../components/FoldersContext";


import Nav from "../components/Nav";
import Klassroom from "../components/Klassroom";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <FoldersProvider>
          <Klassroom />
        </FoldersProvider>
        <Courses />
      </div>
    </main>
  )
}
