import styles from "../styles/Course.module.css";

export default function Course({ course }) {

    return (
        <>
            <a style={{ textDecoration: "none", color: "inherit" }} href={course.alternateLink} target="_blank">
                <div className={styles.course}
                >

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
                            className={`${styles.courseText} ${styles.courseId}`}>{course.id}</h6>
                    </div>
                </div>
            </a>
        </>
    )
}
