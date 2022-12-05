import styles from "./LeafsItem.module.scss";

export default function LeafsItem(){
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leaf_item}>
                    <h1>LeafsItem 1</h1>
                </div>  
                <div className={styles.leaf_item}>
                    <h1>LeafsItem 2</h1>
                </div>
                <div className={styles.leaf_item}>
                    <h1>LeafsItem 3</h1>
                </div>
                <div className={styles.leaf_item}>
                    <h1>LeafsItem 4</h1>
                </div>
            </div>
        </div>        
    );
}