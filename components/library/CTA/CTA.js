import styles from "./CTA.module.scss";

export default function CTA({ blockProps }){
    return(
        <div className={styles.cta}>
        <a  className={styles.button} target={blockProps.field_button_type[0]?.value == "file" ?  "_blank" : ""} href={blockProps.field_button_type[0]?.value == "file" ? `${blockProps.field_button_file}?download=1` : ""  } download>{blockProps.field_button_cta[0]?.value}</a>
        </div>
    )
}