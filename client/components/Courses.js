import { useState, useEffect } from "react";

import Course from "./Course";

import styles from "../styles/Courses.module.css";

export default function Courses({ }) {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/courses")
            .then(res => res.json())
            .then(({ courses }) => setCourses(courses))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h3 style={{ margin: 4 }}>Courses: </h3>
            {
                courses.length > 0 ?
                    courses.map((course) => {
                        return <Course key={course.id} course={course} />
                    })
                    :
                    <div>No courses</div>
            }
            <div>
                <h3 style={{ margin: 4 }}>Course pagination: {courses.length}</h3>
                <div>
                    <h3 style={{ margin: 4 }}>Change pagination</h3>
                    <div className={styles.paginationButtons}>
                        <button className={styles.button}>↑</button>
                        <button className={styles.button}>↓</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
