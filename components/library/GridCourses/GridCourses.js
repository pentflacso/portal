import { useEffect, useState, Fragment } from 'react';
import { useRouter } from "next/router";
import CourseCard from "../../usina/CourseCard/CourseCard";
import styles from "./GridCourses.module.scss";

export default function GridCourses({ dataCourses }){

    const router = useRouter();
    const [dataFiltered, setDataFiltered] = useState();

    useEffect(() =>{   
        const filtredCards = dataCourses.filter(x => x.path !== router.asPath);
        setDataFiltered(filtredCards);
    }, [dataCourses]);

    return (
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                {dataFiltered?.map((item, i) => {
                    return (
                        router.asPath !== item.path  ?  
                        <Fragment key={i}>
                            { i % 2 === 0 && <CourseCard { ...item}/> }
                        </Fragment> : ""
                    );
                })}
            </div>

            <div className={styles.col_right}>
                {dataFiltered?.map((item, i) => {
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