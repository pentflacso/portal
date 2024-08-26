import { useRouter } from "next/router";
import Link from 'next/link';
import styles from "./SliderCourses.module.scss";

export default function SliderCourses({ dataCourses }){
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            {dataCourses.map((item, i) => 
                router.asPath !== item.path  ?  
                <>                        
                    <article className={styles.card} key={i}>
                        {item.status == 0 && <p className={styles.inscription_status}>{`${item.format} — Inscripción abierta`}</p>}
                        {item.image && <Link href={item.path} className={styles.image}><img src={item.image} alt={item.title}/></Link>}
                        <h5><Link href={item.path}>{item.title}</Link></h5>
                        <p className={styles.description}>{item.description}</p>    
                            <div className={styles.duration_and_modality}>
                                <p>{item.duration}</p>
                                <p>{item.mode}</p>
                            </div>                             
                        <Link href={item.path} className={`${styles.cta_btn} cta_btn`}>Más información</Link>
                    </article>                   
                </>: ""
            )}                            
        </div>
    )
}