import styles from "./KeysBox.module.scss";

export default function KeysBox({ data }){

    return(
        <div className={styles.wrapper}>

            {data.map((keyFeatures, i) => {   
              return (  
                <div className={styles.key_features} key={i}>
                    <img src={keyFeatures.img} alt="Icono" />
                    <p>{keyFeatures.description}</p>
                </div>           
            )})} 
           
        </div>
    );
}