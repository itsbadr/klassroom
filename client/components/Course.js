import { useState } from "react";

import styles from "../styles/Course.module.css";

export default function Course({ course }) {

    const [courseHovered, setCourseHovered] = useState(false);

    return (
        <>
            <a style={{ textDecoration: "none", color: "inherit" }} href={course.alternateLink} target="_blank">
                <div className={styles.course}
                    onMouseEnter={() => setCourseHovered(true)}
                    onMouseLeave={() => setCourseHovered(false)}>

                    <div>
                        {
                            course.hasOwnProperty("alternateName") 
                            ?
                            <h5 className={styles.courseText}>
                                <i>{course.alternateName}</i>
                            </h5>
                            : 
                            null
                        }
                        <h5
                            className={styles.courseText}>{course.name}
                        </h5>
                        <h6
                            style={{ display: courseHovered ? "block" : "none" }}
                            className={styles.courseText}>{course.id}</h6>
                    </div>
                </div>
            </a>
        </>
    )
}
