import { Fragment } from 'react';
import { useRouter } from "next/router";
import CourseCard from "../../usina/CourseCard/CourseCard";
import styles from "./GridCourses.module.scss";

export default function GridCourses({ dataCourses }){

    const router = useRouter();

    return (
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                {dataCourses.map((item, i) => {
                    return (
                        router.asPath !== item.path  ?  
                        <Fragment key={i}>
                            { i % 2 === 0 && <CourseCard { ...item}/> }
                        </Fragment> : ""
                    );
                })}
            </div>

            <div className={styles.col_right}>
                {dataCourses.map((item, i) => {
                    return (
                        router.asPath !== item.path  ?  
                        <Fragment key={i}>
                            { i % 2 !== 0 && <CourseCard { ...item}/> }
                        </Fragment> : ""
                    );
                })}
            </div>

        </div>
    )
}