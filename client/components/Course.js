import { useState } from "react";

import styles from "../styles/Course.module.css";

export default function Course({ course }) {

    const [courseHovered, setCourseHovered] = useState(false);

    return (
        <div className={styles.course}
            onMouseEnter={() => setCourseHovered(true)}
            onMouseLeave={() => setCourseHovered(false)}>
            <div>
                <h4
                    className={styles.courseText}>{course.name}
                </h4>
                <h6
                    style={{ display: courseHovered ? "block" : "none" }}
                    className={styles.courseText}>{course.id}</h6>
            </div>
        </div>
    )
}
