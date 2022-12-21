import React, { useEffect, useState } from 'react';
import styles from "./ArticlesList.module.scss";

export default function ArticlesList({ data, dataLimit }){

    const [pagination, setPagination] = React.useState(6);
    const [dataPagination, setDataPagination] = React.useState(dataLimit);

    

    return( 
            <div className={styles.wrapper}>

                <div className={styles.cards}>
                   
                    <div className={styles.col_left}>
                        {dataPagination.map((data, i) => {
                            return (
                                <React.Fragment key={i}>
                                    { i % 2 === 0 ?
                                        <div><p>{data.category}</p></div>
                                        : ''
                                    }                            
                                </React.Fragment>                                         
                            );
                        })}
                    </div>

                    <div className={styles.col_right}>
                        {dataPagination.map((data, i) => {
                            return (
                                <React.Fragment key={i}>
                                    { i % 2 !== 0 ?
                                        <div><p>{data.category}</p></div>
                                        : ''
                                    }                            
                                </React.Fragment>                                         
                            );
                        })}
                    </div>

                </div>

                <button type="button" className={styles.verMas_btn}>Ver más</button> 

            </div>         
    );
}