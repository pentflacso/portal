import styles from "./KeysBox.module.scss";

export default function KeysBox({ data }){

    return(
        <div className={styles.wrapper}>

            {data.map((keyFeatures, i) => {   
              return (  
                <div className={styles.key_features} key={i}>
                    <div className={styles.icon}>
                        <img src={keyFeatures.img} alt="Icono" />
                    </div>
                    <p>{keyFeatures.description}</p>
                </div>           
            )})} 
           
        </div>
    );
}